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
            <p>Phone 1 : ${storedselectedBerufStatus}</p>

            <p>Page 2 : ${storedpage2}</p>
            <p>Page 2 Text : ${storedpage2Text}</p>

            <p>Page 3 : ${storedpage3Range} Jahrgang </p>

            <p>Page 4 : ${storedpage4}</p>
            <p>Page 4 Range : ${storedpage4Range} Einkommen</p>

            <p>Page 5 : ${storedpage5}</p>
            <p>Page 5 Range : ${storedpage5Range} Anzahl Kinder</p>

            <p>Page 6 : ${storedpage6}</p>
            <p>Page 6 Range : ${storedpage6Range}% Selbsteinschätzung Gesundheit</p>
            <p>Page 6 Text : ${storedpage6Text}</p>

            <p>Page 7 : ${storedpage7}</p>

            <p>Page 8 : ${storedpage8}</p>
            <p>Page 8 2nd : ${storedpage8Two}</p>

            <p>Page 9 : ${storedpage9Two}</p>
            <p>Page 9 2nd : ${storedpage9Three}</p>
            <p>Page 9 Range : ${storedpage9Range}</p>

            <p>Page 10 : ${storedPage10}</p>
            <p>Page 10 2nd : ${storedpage10Two}</p>

            <p>Page 11 : ${storedPage11}</p>
            <p>Page 11 2nd : ${storedpage11Two}</p>
            <p>Page 11 3rd : ${storedPage11Three}</p>
            <p>Page 11 Range : ${storedpage11Range}</p>
            <p>Page 11 Range 2nd : ${storedPage11RangeTwo}</p>
            <p>Page 11 Range 3rd : ${storedpage11RangeThree}</p>

            <p>Page 12 : ${storedpage12Two}</p>
            <p>Page 12 Range : ${storedpage12Range}</p>
            <p>Page 12 Range 2rd : ${storedPage12RangeTwo}</p>

            <p>Page 13 : ${storedpage13}</p>
            <p>Page 13 Range : ${storedpage13Range}</p>

            <p>Page 14 Range : ${storedpage14Range}</p>
            <p>Page 14 Range 2rd : ${storedpage14RangeTwo}</p>

            <p>Page 15 Range : ${storedpage15Range}</p>
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
