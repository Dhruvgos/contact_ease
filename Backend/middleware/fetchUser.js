const jwt = require("jsonwebtoken");
const SECRET_KEY = "DhruvGoswami";

const fetchUser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json({ message: "Please authenticate with correct Token" });
    }
    try {
        const data = jwt.verify(token, SECRET_KEY);
        req.user = data;
        // console.log(req.user)
        console.log(token)
        next();
    } catch (error) {
        return res.status(401).json({ error: "Please authenticate with correct Token" });
    }
};

module.exports = fetchUser;
