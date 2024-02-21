const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sendEmail } = require("../services/nodeMailer");

const createUser = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;
        if (!name || !email || !password || !phone) {
            return res.status(400).send({
                status: "FAILED",
                message: "All fields required!"
            });
        }

        // Check if user is already registered
        const checkUser = await userModel.findOne({ email });
        if (checkUser) {
            return res.status(400).send({
                status: "FAILED",
                message: "User already registered!"
            });
        }

        // Generating salt and password hashing
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await userModel.create({
            name,
            email,
            phone,
            password: hashPassword
        });

        if (user) {
            const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET, { expiresIn: '10m' });
            const verificationLink = `http://localhost:${process.env.PORT}/api/user/verify/${user._id}/${token}`;
            const mailContent = {
                subject: 'Email Verification | CodeWithAsh',
                text: 'Please verify your email address with the link below.',
                content: `
                    <h2>Greetings of the day!</h2>
                    <p><b>Dear ${user.name}, </br> Please verify your email address by clicking <a href='${verificationLink}'>here</a>.</b></p>
                    <p><strong>Caution:</strong> Please do not share this email with anyone for security reasons. This link is unique to your account and should not be shared.</p>
                    <p>If you did not register for an account with us, please ignore this email.</p>
                    <p><h3>Thanks,</h3><h3>Team CWA</h3></p>
                `
            };
            const checkMail = await sendEmail(user.email, mailContent);
            console.log(checkMail);
            return res.status(201).send({
                status: "SUCCESS",
                message: "User registered successfully",
                link: verificationLink,
                data: {
                    uid: user._id,
                    name: user.name,
                    email: user.email
                }
            });
        }
        return res.status(400).send({ message: "Bad request" });
    } catch (error) {
        return res.status(500).send('Internal Server Error: ' + error);
    }
};

const verifyUser = async (req, res) => {
    try {
        const { _id, token } = req.params;
        const { userId } = await jwt.verify(token, process.env.APP_SECRET);
        if (userId === _id) {
            const user = await userModel.findByIdAndUpdate(_id, { isVerified: true }, { new: true, select: 'email name isVerified' });
            return res.status(200).send({
                status: "SUCCESS",
                message: "User verified successfully",
                user
            });
        }
        return res.status(400).send({
            status: "FAILED",
            message: "Invalid token or ID"
        });
    } catch (error) {
        return res.status(500).send({
            status: "FAILED",
            message: error.message
        });
    }
};

module.exports = { createUser, verifyUser };