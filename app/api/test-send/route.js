import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { username, email, phone  } = await request.json();

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

        // Send the email
        await transporter.sendMail(mailOptions);
        console.log('Email sent to: ' + mailOptions.to);

        return NextResponse.json({ success: true, message: `Thank you, we've received your details.` });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ success: false, message: 'Sorry, connection error. Please try again.' }, { status: 500 });
    }
}
