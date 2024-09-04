import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { storedpage2Text,
            username,
            email,
            phone,
            isChecked,
            storedpage3Range,
            storedpage2,
            storedpage15Range,
            storedpage14RangeTwo,
            storedpage14Range,
            storedpage13Range,
            storedpage13,
            storedPage11,
            storedpage11Two,
            storedPage11Three,
            storedpage11Range,
            storedPage11RangeTwo,
            storedpage11RangeThree,
            storedpage12Range,
            storedPage12RangeTwo,
            storedpage12Two,
            storedpage10Two,
            storedPage10,
            storedpage8Two,
            storedpage8,
            storedpage6Text,
            storedpage6Range,
            storedpage6,
            storedpage5Range,
            storedpage4,
            storedpage4Range,
            storedpage5,
            storedselectedBerufStatus,
            storedpage9Two,
            storedpage9Three,
            storedpage9Range,
            storedpage7,  } = await request.json();

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
