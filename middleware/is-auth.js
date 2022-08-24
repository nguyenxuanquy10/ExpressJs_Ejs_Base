const auth = (req, res, next) => {
    let token = req.headers['token']; //
    if (!token) {
        return res.status(401).json({ message: 'Not exist token' })
    }
    jwt.verify(token, "tokensecret", (err, decoded) => {
        if (err) {
            return res.status(404).json({ message: "Jwt is invalid" })
        }
        req.user = decoded
        next();
    })
}
const isAdmin = (req, res, next) => {
    if (!req.user.role === "admin") {
        return res.status(401).json({ message: "You are not admin" })
    }
    next();

}
module.exports = {
    auth,
    isAdmin
}