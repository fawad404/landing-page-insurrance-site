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
            storedpage7,

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
            to: "doctorfawad31@gmail.com",
            subject: 'Client Submission',
            html: `
            <div style="padding-10px">
            <h1>Client Submission</h1>
            <p>Name : ${username}</p>
            <p>Email : ${email}</p>
            <p>Phone No : ${phone}</p>
            
            <p>Page 1 : ${storedselectedBerufStatus}</p>

            <p>Page 2 : ${storedpage2}</p>
            <p>Page 2 Text : ${storedpage2Text}</p>

            <p>Page 3 : ${storedpage3Range} Jahrgang</p>

            <p>Page 4 : ${storedpage4}</p>
            <p>Page 4 Range : ${Number(storedpage4Range).toLocaleString('de-DE')} Euro p.a.</p>

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
            <p>Page 9 Range : ${Number(storedpage9Range).toLocaleString('de-DE')} Euros p.a.</p>

            <p>Page 10 : ${storedPage10}</p>
            <p>Page 10 2nd : ${storedpage10Two}</p>

            <p>Page 11 : ${storedPage11}</p>
            <p>Page 11 Range : ${storedpage11Range}%</p>
            <p>Page 11 2nd : ${storedpage11Two}</p>
            <p>Page 11 Range 2nd : ${storedPage11RangeTwo}%</p>
            <p>Page 11 3rd : ${storedPage11Three}</p>
            <p>Page 11 Range 3rd : ${storedpage11RangeThree}%</p>

            <p>Page 12 Range : Gesetzliche Rente: ${Number(storedpage12Range).toLocaleString('de-DE')} Euros p.M.</p>
            <p>Page 12 : ${storedpage12Two}</p>
            <p>Page 12 Range 2nd : Summe BAV und Arbeitseinkommen: ${Number(storedpage12Range).toLocaleString('de-DE')} Euros p.M.</p>

            <p>Page 13 : ${storedpage13}</p>
            <p>Page 13 Range : ${Number(storedpage13Range).toLocaleString('de-DE')} Euros p.a.</p>

            <p>Page 14 Range : ${storedpage14Range}%</p>
            <p>Page 14 Range 2rd : ${storedpage14RangeTwo}%</p>

            <p>Page 15 Range : ${storedpage15Range}%</p>

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

        return NextResponse.json({ success: true, message: `Thank you we've recieved your details.` });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ success: false, message: 'Sorry connection error try again.' }, { status: 500 });
    }
}