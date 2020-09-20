const User = require("./models/user")
const bcrypt = require("bcryptjs");
const passport = require("passport");
const jwt = require("jsonwebtoken");

/*************************** DISPLAY USERS ***************************/
const getAllUsers = async (req, res) => {
    try {
        let data = await User.findAll({
            attributes: ["name", "family_name"]
        });
        return res.json({
            status: "ok",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            data: error
        })
    }
}

/*************************** CREATE USER ***************************/
const createUser = async (req, res) => {
    const newUser = new User({
        name,
        family_name,
        password,
    });
    // Code the password using bcrypt module
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            newUser.password = hash;
            newUser
                .save()
                .then((newuser) => res.json(newuser))
                .catch((err) => console.error(err));
        });
    });
    try {
        const user = await User.create(req.body);
        return res.status(201).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
/*************************** LOGIN ***************************/
const login = async (req, res) => {
    const { name, family_name, password } = req.body;
    let user = await User.findAll({
        attributes: ["name", "family_name"]
            .then((user) => {
                if (!user) res.sendStatus(404);
                else {
                    bcrypt.compare(password, user.password).then((isMatched) => {
                        if (isMatched) {
                            const payload = {
                                id: user._id,
                                email: user.email,
                                role: user.role,
                                userName: user.userName,
                                phone: user.phone,
                                profilePicture: user.profilePicture,
                                adress: user.adress,
                                dateofcreation: user.dateofcreation,
                            };
                            jwt.sign(payload, "session", { expiresIn: 3600 }, (err, token) => {
                                if (err) res.sendStatus(500);
                                else {
                                    res.json({ token: token });
                                }
                            });
                        } else res.sendStatus(400);
                    });
                }
            })
            .catch((err) => res.send("Server error"))
    })
}

/*************************** VALIDATE TOKEN ***************************/
const validateToken = passport.authenticate("jwt", { session: false },
    (req, res) => {
        res.send(req.user);
    }
);

/*************************** UPDATE USER ***************************/
const updateUser = async (req, res) => {
    try {
        let id = req.params.id;
        let body = req.body;
        let data = await User.update(body, {
            where: {
                id
            }
        });
        return res.json({
            status: "ok",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            data: error
        })
    }
}

/*************************** DELETE USER ***************************/
const deleteUser = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await User.destroy({
            where: {
                id
            }
        });
        return res.json({
            status: "ok",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            data: error
        })
    }
}
module.exports = {
    getAllUsers, createUser, deleteUser, updateUser, login
}