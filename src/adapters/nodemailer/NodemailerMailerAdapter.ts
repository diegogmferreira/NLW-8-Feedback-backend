import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../MailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4d6fca0a8c77f9",
    pass: "2b7a8ce3c41d3d"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Galdev <oi@galdev.com.br>',
      to: 'Diego Ferreira <di.galvao89@gmail.com>',
      subject,
      html: body
    });
  };
}