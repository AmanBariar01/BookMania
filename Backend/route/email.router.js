import express, { text } from "express";
import nodemailer from "nodemailer"

const router = express.Router();

router.post("/contact", (req,res)=>{
    const {name, email, subject, message} = req.body;
    console.log(name,email,subject,message);

    try {
        const transporter = nodemailer.createTransport({
            service : "gmail",
            auth : {
                user : process.env.Email_Username,
                pass : process.env.Email_Password
            }
        });

        const mailOptions = {
            from : email,
            to : process.env.Email_Username, 
            subject : subject,
            text : message
        }

        console.log(mailOptions);

        transporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                console.log("Error :",error);
            }else{
                console.log("Email Sent" + info.response);
                res.status(201).json({status:201, info})
            }
        })

    } catch (error) {
        res.status(401).json({status:401, error})
    }
})

export default router;