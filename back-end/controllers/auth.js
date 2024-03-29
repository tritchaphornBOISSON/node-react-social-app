import bcrypt from "bcryptjs";
import { db } from "../connectDB.js";
import jwt from "jsonwebtoken";

export const register = (req, res) => {

    const query = "SELECT * FROM users WHERE email = ?";

    db.query(query, [req.body.email], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }

        if (data.length) {
            return res.status(409).json("Email address already exists!");
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const query = "INSERT INTO users (`username`, `email`, `password`, `name`) VALUE (?)"
        const values = [req.body.username, req.body.email, hashedPassword, req.body.name];

        db.query(query, [values], (err, data) => {
            if (err) {
                return res.status(500).json(err);
            }

            return res.status(200).json("User has been created.");
        });

    });


}

export const login = (req, res) => {
    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [req.body.email], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }

        if (data.length === 0) {
            return res.status(400).json("User not found.");
        }

        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password);

        if (!checkPassword) {
            return res.status(400).json("Wrong password or email!");
        }

        const token = jwt.sign({ id: data[0].id }, "secretkey");

        const { password, ...others } = data[0];

        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).json(others);
    })
}


export const logout = (req, res) => {
    res.clearCookie("accessToken", {
        secure: true,
        sameSite: true,
    }).status(200).json("User has been logged out.")
}