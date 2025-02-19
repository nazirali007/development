"use server"

import nodemailer from "nodemailer"
import fs from "fs";
import util from "util";

const readFileAsync = util.promisify(fs.readFile);


const NODEMAILER_PASSWORD = process.env.NODEMAILER_SENDER_PASSWORD ?? "vstb zdzp thfk flvs";
const NODEMAILER_SENDER_EMAIL = process.env.NODEMAILER_SENDER_EMAIL ?? "captureatriptest@gmail.com";
const NODEMAILER_RECIEVER_EMAIL = "info@captureatrip.com";

if (!NODEMAILER_PASSWORD || !NODEMAILER_SENDER_EMAIL || !NODEMAILER_RECIEVER_EMAIL) {
    throw new Error("Required environment variables are not defined for NodeMailer (mail.ts)");
}

// Transporter for sending email
const transporter = nodemailer.createTransport({
    service: "Gmail",
    secure: false,
    auth: {
        user: NODEMAILER_SENDER_EMAIL,
        pass: NODEMAILER_PASSWORD
    }
})

// Read HTML file
async function readHTMLFile(path: string): Promise<string> {
    try {
        const html = await readFileAsync(path, { encoding: "utf-8" });
        return html;
    } catch (err) {
        console.error("Error reading HTML file:", err);
        throw err;
    }
}

export async function EmailSend() {
    const transport = await nodemailer.createTransport({
        service: "Gmail",
        secure: false,
        auth: {
            user: NODEMAILER_SENDER_EMAIL,
            pass: NODEMAILER_PASSWORD
        }
    })
    const mailOptions = {
        from: process.env.NODEMAILER_SENDER_EMAIL,
        to: "info@captureatrip.com",
        subject: "Capture A Trip - Payment Confirmation Email",
        Html: `<h1>Payment Confirmation</h1>`
    }


    await transport.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log("Email Sent " + info.response)
        }
    })
}

async function sendMail(mailOptions: any) {
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email Sent:", info.response);
        return true;
    } catch (error) {
        console.error("Error while sending mail:", error);
        return false;
    }
}

const rootDir = process.cwd();
const bookingHTML = `${rootDir}/src/lib/booking-mail.html`;
const queryHTML = `${rootDir}/src/lib/query-mail.html`;


export async function bookingConfimationMail({
    email,
    tripName,
    tripDate,
    tripDuration,
    name,
    phone,
    memberCounts,
    slug,
}: {
    email: string,
    tripName: string,
    tripDate: string,
    tripDuration: string,
    name: string,
    phone: string,
    memberCounts: any,
    slug: string
}) {
    try {
        const htmlContent = await readHTMLFile(bookingHTML);

        const resultedHtml = htmlContent
            .replace("{name}", name)
            .replace("{tripName}", tripName)
            .replace("{tripDate}", tripDate)
            .replace("{tripDuration}", tripDuration)
            .replace("{phone}", phone)
            .replace("{email}", email)
            .replace("{memberCounts}", JSON.stringify(memberCounts))
            .replace("{slug}", slug);

        const mailOptions = {
            from: NODEMAILER_SENDER_EMAIL,
            to: NODEMAILER_RECIEVER_EMAIL,
            subject: `Booking | ${tripName} | @${name} - ${phone}`,
            html: resultedHtml
        }

        await sendMail(mailOptions);
        console.log("Booking Confirmation Mail Sent");
        return true;
    } catch (err: any) {
        console.error("Error in bookingConfirmationMail:", err);
        return null;
    }
}

export async function queryMail({
    email,
    name,
    phone,
    destination
}: {
    email: string,
    name: string,
    phone: string,
    destination: string
}) {
    try {
        const htmlContent = await readHTMLFile(queryHTML);
        const resultedHtml = htmlContent
            .replace("{name}", name)
            .replace("{phone}", phone)
            .replace("{email}", email)
            .replace("{destination}", destination);

        const mailOptions = {
            from: NODEMAILER_SENDER_EMAIL,
            to: NODEMAILER_RECIEVER_EMAIL,
            subject: `Query | @${name} - ${phone}`,
            html: resultedHtml
        }

        await sendMail(mailOptions);
        return true;
    } catch (err: any) {
        console.error("Error in queryMail:", err);
        return false;
    }
}
