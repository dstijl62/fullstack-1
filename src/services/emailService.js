//
//
require("dotenv").config();
import nodemailer from "nodemailer";

let sendSimpleEmail = async (dataSend) => {
  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
    auth: {
      user: process.env.EMAIL_APP,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: `"Test send Email" <dstijl11@gmail.com>`,
    to: dataSend.receiverEmail,
    subject: "Thông tin đặt lịch khám bệnh",
    // text: "hello",
    html: getBodyHTMLEmail(dataSend),
  });
};

let getBodyHTMLEmail = (dataSend) => {
  let result = "";
  if (dataSend.language === "vi") {
    result = `
    <h3> Xin chào ${dataSend.patientName}!</h3>
    <p>Bạn nhận được email này vì đã đặt lịch khám bệnh online trên Angel Clinic</p> 
    <p> Thông tin đặt lịch khám bệnh: </p>
    <div><b>Thời gian: ${dataSend.time}</b></div>
    <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>

    <p>Nếu các thông tin trên là đúng sự thật, vui lòng click
    vào đường link bên dưới để xác nhận và hoàn tất thủ tục đặt lịch khám bệnh</p>
    <div>
    <a href="${dataSend.redirectLink}" target="_blank">Click here</a>
    </div>

    <div> Cảm ơn quý khách vì đã sử dụng dịch vụ</div>
    `;
  } else if (dataSend.language === "en") {
    result = `
     <h3>Dear ${dataSend.patientName},</h3>
     <p>Thank you for booking an online medical appointment with Angel Clinic.</p>
     <p><strong>Appointment Details:</strong></p>
     <div><b>Time:</b> ${dataSend.time}</div>
     <div><b>Doctor:</b> ${dataSend.doctorName}</div>
     <p>
     If the above information is correct, please click the link below to confirm and complete your appointment booking:
     </p>
     <div>
     <a href="${dataSend.redirectLink}" target="_blank">Confirm Appointment</a>
     </div>
     <p>We appreciate your trust in our services.</p>
     <p>Best regards,<br>
     Angel Clinic</p>
    `;
  }

  return result;
};

module.exports = {
  sendSimpleEmail,
};
