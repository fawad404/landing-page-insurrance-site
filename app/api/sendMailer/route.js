import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, phone, date, time } = await request.json();

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Date:', date);
        let transporter = nodemailer.createTransport({
            // host: 'smtp.hostinger.com', // SMTP server details
            // port: 465, // SMTP server port
            // secure: true, // use TLS
            // auth: {
            //     user: 'fawad@softhawks.com',
            //     pass: 'Nuttertools@1122'
            // }

            service: 'gmail',
                auth: {
                    user: 'mrrobot34404@gmail.com', // your Gmail address
                    pass: 'hcem kjbl oeub czua' // your Gmail app password
                }
        });

        let mailOptions = {
            from: '"PKV-GKV" <fawad@softhawks.com>',
            to: "poggensee@poggensee.de",
            subject: 'Client Submission',
            html: `
            <div style="padding-10px">
            <h1>Client Submission</h1>
            <p>Name : ${name}</p>
            <p>Email : ${email}</p>
            <p>Phone No : ${phone}</p>
            <p>Date : ${date}</p>
            <p>Time : ${time}</p>
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
