Este es un proyecto de ejemplo que demuestra cómo realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) utilizando MongoDB como base de datos y Node.js con Express.js como entorno de ejecución del servidor.
Antes de ocupar la aplicación es necesario crear un usuario y luego poder hacer un login y ocupar las funcionalidades de la página.

Requisitos previos

Node.js instalado
MongoDB instalado y en ejecución

Instalación

Clona este repositorio:

bashCopy codegit clone https://github.com/marioisl/crud-mongodb.git

Navega al directorio del proyecto:

bashCopy codecd crud-mongodb

Instala las dependencias:

bashCopy codenpm install
Configuración

Crea un archivo .env en la raíz del proyecto.
Agrega la siguiente línea al archivo .env reemplazando <TU_MONGO_URI> con la URI de conexión a tu instancia de MongoDB:

Copy codeMONGODB_URI=<TU_MONGO_URI>
Ejecutar la aplicación
bashCopy codenpm start
La aplicación estará disponible en http://localhost:3000.
Rutas

GET /: Muestra la página principal.
GET /notes: Muestra todas las notas.
GET /notes/add: Muestra el formulario para agregar una nueva nota.
POST /notes/add: Agrega una nueva nota.
GET /notes/edit/:id: Muestra el formulario para editar una nota existente.
PUT /notes/edit/:id: Actualiza una nota existente.
DELETE /notes/delete/:id: Elimina una nota existente.

Estructura del proyecto

app.js: Archivo principal de la aplicación.
routes/: Directorio que contiene los archivos de enrutamiento.
models/: Directorio que contiene los modelos de datos.
views/: Directorio que contiene los archivos de plantillas EJS.

Dependencias

express: Framework web para Node.js.
dotenv: Carga variables de entorno desde un archivo .env.

Se pueden agregar validaciones para generar una aplicación más robusta.
mongoose: Biblioteca de modelado de objetos para MongoDB.
morgan: Middleware de registro de solicitudes HTTP.
express-handlebars: Motor de plantillas para Express.js.
method-override: Middleware que permite utilizar verbos HTTP diferentes de GET y POST.
connect-flash: Middleware que proporciona mensajes de realimentación transitorios.
express-session: Middleware para manejar sesiones en Express.js.
passport: Middleware de autenticación.
