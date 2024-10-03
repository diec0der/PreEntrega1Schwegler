# IBAI Shop - React E-commerce Application

IBAI es una aplicación de e-commerce creada con React. La aplicación permite a los usuarios explorar productos en varias categorías, agregarlos al carrito, realizar compras y contactarse a través de varios canales de soporte.

## Características

- **Carrito de Compras**: Los usuarios pueden agregar productos al carrito, actualizar la cantidad y eliminar productos.
- **Compra Segura**: El sistema genera una orden con un ID único y actualiza el stock de productos después de la compra.
- **Formulario de Contacto**: Los usuarios pueden enviar mensajes a través del formulario de contacto, proporcionando su nombre, email, y un mensaje.
- **Preguntas Frecuentes (FAQ)**: Una sección con preguntas frecuentes para ayudar a los usuarios a resolver problemas comunes.
- **Soporte en Tiempo Real**: Canales de comunicación, incluyendo email, teléfono, redes sociales y un chat en vivo.

## Instalación

### Requisitos

Asegúrate de tener instalado:

- Node.js
- npm o yarn

### Pasos para la instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/ibai-shop.git

Uso

Navegación

	•La aplicación cuenta con varias páginas como Inicio, Categorías, Carrito, Formulario de Contacto, Soporte y FAQ.
	•Los usuarios pueden navegar entre las diferentes categorías de productos y usar la barra de búsqueda para encontrar productos específicos.
	•Una vez que los usuarios han agregado productos al carrito, pueden proceder a la compra y ver el resumen de su pedido.

Compra de Productos

	1.Agrega productos al carrito desde las páginas de categorías o desde el detalle del producto.
	2.En el carrito, ajusta las cantidades y completa la información del comprador.
	3.Presiona “Terminar compra” para completar el pedido. Se generará un ID de la orden y el stock de los productos se actualizará.

Formulario de Contacto

Los usuarios pueden enviar sus consultas a través del formulario de contacto proporcionando su nombre, email y un mensaje.

Estructura del Proyecto

El proyecto está dividido en varios componentes de React, que incluyen:

	•App.js: Componente principal que organiza las rutas y la estructura de la aplicación.
	•NavBar: Componente para la barra de navegación superior.
	•Cart: Componente del carrito de compras, donde los usuarios pueden gestionar sus productos.
	•SoporteYFAQ: Página con las preguntas frecuentes y los canales de soporte.
	•ContactForm: Página con el formulario de contacto.
	•Canales: Página que describe los canales de comunicación disponibles.

Dependencias

	•React - Biblioteca para crear interfaces de usuario.
	•Firebase - Plataforma de desarrollo de aplicaciones, usada para la autenticación y base de datos.
	•React Bootstrap - Componentes de interfaz de usuario reutilizables basados en Bootstrap.

Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

npm start o yarn start

Ejecuta la aplicación en modo de desarrollo.
Abre http://localhost:3000 para verlo en el navegador.

npm run build o yarn build

Compila la aplicación para producción en el directorio build.
Agrupa React en modo de producción y optimiza la construcción para un mejor rendimiento.

npm test o yarn test

Inicia el corredor de pruebas en el modo interactivo.

Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.