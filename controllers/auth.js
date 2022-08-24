const authService = require("../services/auth.service");
const catchAsync = require('../util/catchAsync');
const jwt = require("jsonwebtoken");
const loginUserNameAndPassword = catchAsync(async(req, res, next) => {
    const { username, password } = req.body;
    const user = await authService.loginUserNameAndPassword(username, password);
    if (!user) {
        return res.status(404).json({ message: "Invalid username or password" })
    }
    const token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' });
    return res.status(200).json({ token: token, user: user })
})
const logout = catchAsync(async(req, res, next) => {

    })
    // catchAsync(async(req, res, next) => {

// })
module.exports = {
    loginUserNameAndPassword,
    logout,
}