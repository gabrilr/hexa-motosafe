import { SendNotificationEmailService } from "../../application/services/SendNotificationEmailService";
import { nodemailer } from "nodemailer";

const passAppGmail = process.env.SECRET_KEY_GMAIL ?? "";

export class SendNotificationEmailHelper implements SendNotificationEmailService{
    
    sendNotificationEmail(email: string, namecli: string, name: string, event: string, date: string, vel: string, lat: string, lng: string ): boolean {

        const userGmail = "gabrilreyes30@gmail.com";
        const userToGmail = email;
        const day = date.split('T')[0]; 
        const time = date.split('T')[1];

        const messageNotification = (namecli, name, event, day, time, vel, lat, lng) => `
            <html>
                <head>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            color: #333;
                        }
                        .container {
                            max-width: 600px;
                            margin: 20px auto;
                            background: #fff;
                            padding: 20px;
                            border-radius: 10px;
                            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                        }
                        .header {
                            background-color: #d9534f;
                            color: #fff;
                            padding: 20px;
                            border-radius: 10px 10px 0 0;
                            text-align: center;
                        }
                        .header h2 {
                            margin: 0;
                        }
                        .content {
                            padding: 20px;
                        }
                        .content p {
                            margin: 10px 0;
                        }
                        .highlight {
                            font-weight: bold;
                            color: #d9534f;
                        }
                        .incident-details, .incident-type-info {
                            margin-top: 20px;
                            padding: 20px;
                            background: #f9f9f9;
                            border-radius: 10px;
                        }
                        .incident-details ul, .incident-type-info ul {
                            list-style-type: none;
                            padding: 0;
                        }
                        .incident-details ul li, .incident-type-info ul li {
                            margin-bottom: 10px;
                            font-size: 1.1em;
                        }
                        .footer {
                            margin-top: 20px;
                            padding: 10px;
                            background-color: #f4f4f4;
                            border-radius: 0 0 10px 10px;
                        }
                        .footer p {
                            margin: 0;
                            font-size: 0.9em;
                            color: #888;
                        }
                        .location-link {
                            display: inline-block;
                            margin-top: 10px;
                            padding: 6px 10px;
                            background-color: #fff;
                            text-decoration: none;
                            border: 2px solid #d9534f;
                            border-radius: 5px;
                        }
                        .location-link:hover {
                            background-color: #f8f9fa;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h2>Notificación de Incidente - MotoSafe</h2>
                        </div>
                        <div class="content">
                            <p>Estimado(a) <span class="highlight">${namecli}</span>,</p>
                            <p>Le informamos que su familiar <span class="highlight">${name}</span> ha estado involucrado en un incidente de tipo <span class="highlight">${event}</span> ocurrido el <span class="highlight">${date}</span> a las <span class="highlight">${time}</span>.</p>
                            
                            <p><strong>Ubicación:</strong> <a class="location-link highlight" href="https://www.google.com/maps?q=${lat},${lng}" target="_blank">Ver lugar del incidente &#x1F4CD;</a></p>
                            
                            <p>Por favor, trate de comunicarse con su familiar lo antes posible para las medidas necesarias. En caso de no poder contactarlo, contacte a las autoridades correspondientes.</p>
                            
                            <div class="incident-details">
                                <h3>Detalles del incidente</h3>
                                <ul>
                                    <li>- Tipo de incidente: <span class="highlight">${event}</span></li>
                                    <li>- Velocidad registrada: <span class="highlight">${vel} km/h</span></li>
                                    <li>- Fecha y hora: <span class="highlight">${date} a las ${time}</span></li>
                                </ul>
                            </div>
                            
                            <p><strong>Nota:</strong> Este mensaje es una notificación automática. Por favor, no responda a este correo.</p>
                        </div>
                        <div class="footer">
                            <p style="text-align: center;">Atentamente, el equipo de MotoSafe, siempre salvaguardando la integridad de los que amas.</p>
                            
                            <div class="incident-type-info">
                                <h3>Información de los tipos de incidentes:</h3>
                                <ul>
                                    <li><strong>Colisión:</strong> Ha sufrido un accidente que involucra una colisión con un obstáculo o vehículo.</li>
                                    <li><strong>Caída (grave o moderada):</strong> Ha derrapado la motocicleta estando en movimiento.</li>
                                    <li><strong>Caída grave:</strong> Andando a 50 km/h o más.</li>
                                    <li><strong>Caída moderada:</strong> Andando a una velocidad menor a los 50 km/h.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        `;

        // Set up Nodemailer transporter
        const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: userGmail,
            pass: passAppGmail,
        },
        });

        const mailOptions = {
            from: userGmail,
            to: userToGmail,
            subject: 'Notificación de Incidente - MotoSafe',
            html: messageNotification(namecli, name, event, day, time, vel, lat, lng)
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return false;
            }
            console.log("Email sent: " + info.response);
        });
        return true;
    }
}