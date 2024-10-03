import React from 'react';

const Canales = () => {
    return (
        <div className="canales-container">
            <h1>Canales de Comunicación</h1>
            <p>En IBAI, ofrecemos múltiples formas de contactarnos para brindarte la mejor atención. Elige el canal que prefieras para comunicarte con nosotros:</p>
            
            <div className="canales-section">
                <div className="canal-item">
                    <h2>Email</h2>
                    <p>Envíanos un correo electrónico a:</p>
                    <a href="mailto:soporte@ibai.com">soporte@ibai.com</a>
                </div>

                <div className="canal-item">
                    <h2>Teléfono</h2>
                    <p>Llámanos durante nuestros horarios de atención:</p>
                    <p>Teléfono: +54 11 1234-5678</p>
                    <p>Horario: Lunes a Viernes de 9:00 AM a 6:00 PM</p>
                </div>

                <div className="canal-item">
                    <h2>Redes Sociales</h2>
                    <p>También puedes contactarnos a través de nuestras redes sociales:</p>
                    <ul className="social-media-list">
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </div>

                <div className="canal-item">
                    <h2>Chat en Vivo</h2>
                    <p>Haz clic en el ícono de chat en la esquina inferior derecha para iniciar una conversación con nuestro equipo de soporte en tiempo real.</p>
                </div>
            </div>
        </div>
    );
};

export default Canales;