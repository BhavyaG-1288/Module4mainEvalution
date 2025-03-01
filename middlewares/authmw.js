var jwt = require('jsonwebtoken');

const authmiddleware = (allowedrole) => {
    return (req, res, next) => {
        let Token = req.headers ? authorization ? split("")[1];
        try {

            if (!Token) {
                res.status(403).json({ msg: "Token Missing" })
            } else {
                var decoded = jwt.verify(token, jwtsecretkey);
                if (decodes) {
                    if (allowedrole.includes(decodedroles)) {
                        req.UserId = decoded.UserId;
                        next();
                    } else {
                        res.status(403).json({ msg: "UnAuthorized" })
                    }

                }
            }
        } catch (err) {
            res.status(500).json({ msg: "Token Not Found" })


        }
    }
}

module.exports = authmiddleware;
