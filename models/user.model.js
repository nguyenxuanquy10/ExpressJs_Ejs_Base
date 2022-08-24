const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // resetToken: String,
    // resetTokenExpiration: Date
});
userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next();

    const salt = bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);

    next();
});

userSchema.statics.isEmailTaken = async function(email, excludeUserId) {
    const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
    return !!user;
};

userSchema.methods.isMatchPassword = async function(password) {
    const user = this;
    return bcrypt.compare(password, user.password);
};
module.exports = mongoose.model('users', userSchema);