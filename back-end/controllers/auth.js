import bcrypt from "bcryptjs";
import { db } from "../connectDB.js";

export const register = (req, res) => {

    const query = "SELECT * FROM users WHERE username = ?";

    db.query(query, [req.body.username], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }

        if (data.length) {
            return res.status(409).json("User already exists!");
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

}


export const logout = (req, res) => {

}