import "./Pages.css";
import React from 'react';

const SoporteYFAQ = () => {
    return (
        <div className="faq-container">
            <h1>Soporte y Preguntas Frecuentes</h1>
            <section className="faq-section">
                <h2>Preguntas Frecuentes</h2>
                <div className="faq-item">
                    <h3>¿Cómo puedo rastrear mi pedido?</h3>
                    <p>Para rastrear tu pedido, dirígete a la sección "Mis Pedidos" en tu cuenta y selecciona el pedido que deseas rastrear. Si tu pedido está en tránsito, podrás ver el estado actualizado y el número de seguimiento.</p>
                </div>
                <div className="faq-item">
                    <h3>¿Cuál es el tiempo estimado de entrega?</h3>
                    <p>El tiempo estimado de entrega varía según tu ubicación. Normalmente, los envíos nacionales tardan entre 3 y 7 días hábiles. En casos de retraso, por favor contáctanos.</p>
                </div>
                <div className="faq-item">
                    <h3>¿Cómo puedo cancelar o modificar mi pedido?</h3>
                    <p>Para cancelar o modificar tu pedido, por favor contáctanos lo antes posible a través de nuestro formulario de contacto o nuestros canales de atención al cliente.</p>
                </div>
                <div className="faq-item">
                    <h3>¿Cómo puedo realizar una devolución?</h3>
                    <p>Para realizar una devolución, ingresa a tu cuenta, selecciona el pedido correspondiente y sigue las instrucciones para la devolución. Asegúrate de que el producto esté en su empaque original.</p>
                </div>
            </section>
            <section className="support-section">
                <h2>Contacto con Soporte</h2>
                <p>Si no encuentras respuesta a tu consulta en las preguntas frecuentes, puedes contactarnos mediante los siguientes canales:</p>
                <ul>
                    <li>Email: <a href="mailto:soporte@ibai.com">soporte@ibai.com</a></li>
                    <li>Teléfono: +54 11 1234-5678</li>
                    <li>Formulario de contacto: <a href="/ContactForm">Haz clic aquí</a></li>
                </ul>
                <h3>Horarios de Atención</h3>
                <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p>Sábados: 10:00 AM - 2:00 PM</p>
            </section>
        </div>
    );
};

export default SoporteYFAQ;