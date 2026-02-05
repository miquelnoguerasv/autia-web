const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    // Solo permitir método POST
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { nombrecompleto, empresa, email, interes, detalles } = req.body;

    // Validar campos básicos
    if (!nombrecompleto || !email) {
        return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }

    try {
        // Configurar el transporter con las variables de entorno
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST, // Ej: smtp.gmail.com
            port: process.env.SMTP_PORT, // Ej: 465
            secure: process.env.SMTP_SECURE === 'true', // true para 465, false para otros puertos
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Definir el contenido del correo (similar al diseño de N8N pero simplificado en HTML)
        const mailOptions = {
            from: `"Web Form autiA" <${process.env.SMTP_USER}>`, // Remitente
            to: process.env.CONTACT_EMAIL || 'contacto@agenciautia.es', // Destinatario
            replyTo: email, // Para responder directamente al usuario
            subject: `🚀 Lead: ${nombrecompleto} - ${interes}`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Arial', sans-serif; background-color: #0B0F19; color: #E5E7EB; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #111827; border-radius: 12px; overflow: hidden; border: 1px solid #1F2937; }
            .header { background: linear-gradient(90deg, #A855F7 0%, #6366F1 50%, #3B82F6 100%); height: 8px; }
            .content { padding: 30px; }
            h1 { color: #FFFFFF; font-size: 24px; margin-top: 0; }
            .label { color: #9CA3AF; font-size: 12px; text-transform: uppercase; margin-bottom: 5px; font-weight: bold; }
            .value { color: #FFFFFF; font-size: 16px; margin-bottom: 20px; }
            .tag { display: inline-block; background-color: #312E81; color: #C7D2FE; padding: 5px 10px; border-radius: 6px; font-size: 14px; margin-bottom: 20px; }
            .details { background-color: #1F2937; padding: 15px; border-radius: 8px; color: #D1D5DB; white-space: pre-wrap; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header"></div>
            <div class="content">
              <h1>Solicitud de Proyecto</h1>
              
              <div class="label">INTERÉS</div>
              <div class="tag">${interes}</div>

              <div class="label">NOMBRE COMPLETO</div>
              <div class="value">${nombrecompleto}</div>

              <div class="label">EMPRESA / WEBSITE</div>
              <div class="value">${empresa || 'No especificada'}</div>

              <div class="label">CORREO ELECTRÓNICO</div>
              <div class="value"><a href="mailto:${email}" style="color: #A855F7;">${email}</a></div>

              <div class="label">DETALLES DEL PROYECTO</div>
              <div class="details">${detalles}</div>
              
              <hr style="border: 0; border-top: 1px solid #1F2937; margin: 30px 0;">
              
              <div style="font-size: 12px; color: #6B7280; text-align: center;">
                Enviado desde el formulario web de autiA
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
        };

        // Enviar el correo
        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: 'Correo enviado correctamente' });
    } catch (error) {
        console.error('Error enviando correo:', error);
        return res.status(500).json({ message: 'Error enviando el correo', error: error.message });
    }
}
