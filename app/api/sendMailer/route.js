import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, phone, date, time } = await request.json();

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Date:', date);
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mrrobot34404@gmail.com',
                pass: 'mrjphbiazhbnkahg', // Replace with your actual app password
            },
        });        

        // Start sending emails with the first batch
        let mailOptions = {
            from: '"PKV-GKV" <mrrobot34404@gmail.com>',
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

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Mail not sent to: ' + mailOptions.to);
            } else {
                console.log('Email sent to: ' + mailOptions.to, info.response);
                emailCount++;
            }

        });

        return NextResponse.json({ success: true, message: `Thank you we've recieved your details.` });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ success: false, message: 'Sorry connection error try again.' }, { status: 500 });
    }
}