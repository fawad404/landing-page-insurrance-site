import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { 
            storedpage2Text,
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
            storedpage6Range2,
            storedpage6Range3,
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
            storedpage18,
            storedpage7,
            storedpageRange,
        } = await request.json();

        console.log('Name:', username);
        console.log('Email:', email);
        console.log('Phone:', phone);

        let transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com',
            port: 465,
            secure: true,
            auth: {
                user: 'fawad@softhawks.com',
                pass: 'Nuttertools@1122'
            }
        });

        let mailOptions = {
            from: '"PKV-GKV" <fawad@softhawks.com>',
            to: "poggensee@poggensee.de",
            subject: 'Client Test Page Submission',
            html: `
            <div style="padding-10px">
                <h1>Client Submission</h1>
                ${username ? `<p>Name: ${username}</p>` : ''}
                ${email ? `<p>Email: ${email}</p>` : ''}
                ${phone ? `<p>Phone No: ${phone}</p>` : ''}
                ${storedselectedBerufStatus ? `<p>Phone 1: ${storedselectedBerufStatus}</p>` : ''}
                ${storedpage2 ? `<p>Page 2: ${storedpage2}</p>` : ''}
                ${storedpage2Text ? `<p>Page 2 Text: ${storedpage2Text}</p>` : ''}
                ${storedpage3Range ? `<p>Page 3: ${storedpage3Range} Jahrgang</p>` : ''}
                ${storedpage4 ? `<p>Page 4: ${storedpage4}</p>` : ''}
                ${storedpage4Range ? `<p>Page 4 Range: ${storedpage4Range} Euro p.a. Einkommen</p>` : ''}
                ${storedpage5 ? `<p>Page 5: ${storedpage5}</p>` : ''}
                ${storedpage5Range ? `<p>Page 5 Range: ${storedpage5Range} Anzahl Kinder</p>` : ''}
                ${storedpage6 ? `<p>Page 6: ${storedpage6}</p>` : ''}
                ${storedpage6Range ? `<p>Page 6 Range: ${storedpage6Range}% Selbsteinschätzung Gesundheit</p>` : ''}
                ${storedpage6Range2 ? `<p>Page 6 Height: ${storedpage6Range2} cm</p>` : ''}
                ${storedpage6Range3 ? `<p>Page 6 Weight: ${storedpage6Range3} kg</p>` : ''}
                ${storedpage7 ? `<p>Page 7: ${storedpage7}</p>` : ''}
                ${storedpageRange ? `<p>Page 7: ${storedpageRange}</p>` : ''}
                ${storedpage8 ? `<p>Page 8: ${storedpage8}</p>` : ''}
                ${storedpage8Two ? `<p>Page 8 2nd: ${storedpage8Two}</p>` : ''}
                ${storedpage9Two ? `<p>Page 9: ${storedpage9Two}</p>` : ''}
                ${storedpage9Three ? `<p>Page 9 2nd: ${storedpage9Three}</p>` : ''}
                ${storedpage9Range ? `<p>Page 9 Range: ${storedpage9Range} Euros p.a.</p>` : ''}
                ${storedPage10 ? `<p>Page 10: ${storedPage10}</p>` : ''}
                ${storedpage10Two ? `<p>Page 10 2nd: ${storedpage10Two}</p>` : ''}
                ${storedPage11 ? `<p>Page 11: ${storedPage11}</p>` : ''}
                ${storedpage11Range ? `<p>Page 11 Range: ${storedpage11Range}%</p>` : ''}
                ${storedpage11Two ? `<p>Page 11 2nd: ${storedpage11Two}</p>` : ''}
                ${storedPage11RangeTwo ? `<p>Page 11 Range 2nd: ${storedPage11RangeTwo}%</p>` : ''}
                ${storedPage11Three ? `<p>Page 11 3rd: ${storedPage11Three}</p>` : ''}
                ${storedpage11RangeThree ? `<p>Page 11 Range 3rd: ${storedpage11RangeThree}%</p>` : ''}
                ${storedpage12Two ? `<p>Page 12: ${storedpage12Two}</p>` : ''}
                ${storedpage12Range ? `<p>Page 12 Range: ${storedpage12Range} Euros p.M.</p>` : ''}
                ${storedPage12RangeTwo ? `<p>Page 12 Range 2rd: ${storedPage12RangeTwo} Euros p.M.</p>` : ''}
                ${storedpage13 ? `<p>Page 13: ${storedpage13}</p>` : ''}
                ${storedpage13Range ? `<p>Page 13 Range: ${storedpage13Range} Euros p.a.</p>` : ''}
                ${storedpage14Range ? `<p>Page 14 Range: ${storedpage14Range}%</p>` : ''}
                ${storedpage14RangeTwo ? `<p>Page 14 Range 2rd: ${storedpage14RangeTwo}%</p>` : ''}
                ${storedpage15Range ? `<p>Page 15 Range: ${storedpage15Range}%</p>` : ''}
                ${storedpage18 ? `<p>Page 18 Text: ${storedpage18}</p>` : ''}
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
