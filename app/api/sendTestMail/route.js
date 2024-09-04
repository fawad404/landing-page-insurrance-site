import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
export async function POST(request) {
    try {
        const { 
            username,
            email,
            phone,

        } = await request.json();

        console.log('Name:', username);
        console.log('Email:', email);
        console.log('Phone:', phone);
        let transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com', // SMTP server details
            port: 465, // SMTP server port
            secure: true, // use TLS
            auth: {
                user: 'fawad@softhawks.com',
                pass: 'Nuttertools@1122'
            }
        });
        // const transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         user: 'mrrobot34404@gmail.com',
        //         pass: 'mrjphbiazhbnkahg', // Replace with your actual app password
        //     },
        // });        

        // Start sending emails with the first batch
        let mailOptions = {
            from: '"PKV-GKV" <fawad@softhawks.com>',
            to: "fawadanxari31@gmail.com",
            subject: 'Client Submission',
            html: `
            <div style="padding-10px">
            <h1>Client Submission</h1>
            <p>Name : ${username}</p>
            <p>Email : ${email}</p>
            <p>Phone No : ${phone}</p>
            

            </div>
            `,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Mail not sent to: ' + mailOptions.to);
                
            } else {
                console.log('Email sent to: ' + mailOptions.to, info.response);
                
            }

        });

        return NextResponse.json({ success: true, message: `Thank you we've recieved your details.`, 
            username,
            email,
            phone,
          });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ success: false, message: 'Sorry connection error try again.' }, { status: 500 });
    }
}
