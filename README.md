# TP Final - Verde Nido 2024

**Trabajo Final Integrador - Introducción al Desarrollo Web - Primer Cuatrimestre 2024**

**Tecnicatura Universitaria en Desarrollo Web**

## Sobre el Proyecto

Este proyecto, titulado **"Verde Nido"**, es parte del trabajo final integrador de la Tecnicatura Universitaria en Desarrollo Web. La temática del sitio web se centra en la promoción de alojamientos rodeados de naturaleza, ofreciendo a los usuarios una plataforma para descubrir, explorar y reservar estancias en lugares únicos, alejados del bullicio urbano.

## Desarrolladores

El proyecto fue desarrollado por:

- **María Soledad Andina**
- **Fernanda Elola**
- **Diego Javier Lalanda**
- **Nahuel Pereyra**

## Temática y Estética

**Verde Nido** está diseñado para atraer a los amantes de la naturaleza y a aquellos que buscan un refugio tranquilo para sus vacaciones o retiros. La estética del sitio web es limpia, moderna y se enfoca en transmitir tranquilidad y conexión con la naturaleza.

- **Paleta de Colores**: Se utilizaron tonos verdes y neutros, que evocan la serenidad y el entorno natural.
- **Diseño Responsivo**: Adaptado para verse bien en cualquier dispositivo, desde teléfonos móviles hasta pantallas de escritorio.
- **Fotografías de Alta Calidad**: Imágenes impactantes de los alojamientos y sus alrededores, mostrando la belleza natural y la comodidad de los espacios.

## Funcionalidades Principales

### Catálogo de Alojamientos

El sitio web presenta un catálogo interactivo donde los usuarios pueden explorar una amplia gama de opciones de alojamiento. Cada ficha de alojamiento incluye:

- **Título y Descripción**: Información detallada sobre el alojamiento.
- **Precio por Día**: Tarifa diaria del alojamiento.
- **Servicios Disponibles**: Lista de servicios incluidos, como Wi-Fi, piscina, estacionamiento, etc.
- **Ubicación**: Visualización en un mapa interactivo para facilitar la localización.

### Filtro de Búsqueda Avanzado

El filtro de búsqueda permite a los usuarios encontrar alojamientos específicos según sus necesidades y preferencias. Los criterios de búsqueda incluyen:

- **Ubicación**: Filtrar por ciudad o región.
- **Tipo de Alojamiento**: Casas, departamentos, hostels, etc.
- **Precio**: Rango de precios para ajustar según el presupuesto del usuario.
- **Servicios**: Opciones de servicios específicos que los usuarios desean, como piscina, aire acondicionado, etc.

### Detalles del Alojamiento

Una de las funcionalidades más destacadas es la visualización de detalles del alojamiento. Al hacer clic en "Quiero ver más detalles", se muestra:

- **Características del Alojamiento**: Información completa, incluyendo número de dormitorios, baños, estado y tipo de alojamiento.
- **Mapa Interactivo**: Integración con un mapa para mostrar la ubicación exacta y permitir explorar los alrededores.
- **Tarjeta de Servicios**: Una lista visual y fácil de entender de los servicios ofrecidos por el alojamiento.
- **Carrusel de Imágenes**: Un carrusel que permite a los usuarios ver múltiples imágenes del alojamiento, proporcionando una experiencia visual enriquecedora.

### Navegación y Animaciones

- **Barra de Navegación**: Una barra de navegación superior que facilita el acceso a diferentes secciones del sitio.
- **Animaciones Suaves**: Transiciones y efectos de animación que mejoran la experiencia de usuario al interactuar con la página.

### Formulario de Contacto Funcional

El formulario de contacto permite a los usuarios enviar consultas o mensajes a los administradores del sitio. Incluye:

- **Validación en Tiempo Real**: Los campos del formulario son validados al momento de ingreso para asegurar que se complete correctamente.
- **Envío de Datos**: Los datos del formulario son enviados a través de una API local, y el usuario recibe una confirmación del envío exitoso o de los errores.

## Sección de Administración

El sitio incluye una sección de administración para la gestión de alojamientos y otros contenidos, accesible solo para usuarios con privilegios de administrador. Las funcionalidades de la sección de administración son:

### CRUD de Alojamientos

- **Crear, Leer, Actualizar y Borrar**: Completa funcionalidad para la gestión de alojamientos, permitiendo agregar nuevos, editar existentes y eliminar los que ya no están disponibles.

### CRUD de Servicios

- **Gestión de Servicios**: Permite agregar y gestionar los servicios que ofrecen los alojamientos, como Wi-Fi, desayuno incluido, etc.

### CRUD de Imágenes

- **Gestión de Imágenes**: Facilita la subida, eliminación y gestión de las imágenes asociadas a cada alojamiento.

### CRUD de Tipo de Alojamiento

- **Gestión de Tipos de Alojamiento**: Permite la creación y gestión de diferentes tipos de alojamiento, como casas, departamentos, hostels, etc., y su asociación a los alojamientos disponibles.

## Uso de la API Local

El sitio web se comunica con una API local para realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar). La API se encarga de manejar todas las interacciones con la base de datos, proporcionando una capa de abstracción y seguridad entre la interfaz de usuario y los datos almacenados.

## Uso de la Base de Datos Relacional

La aplicación utiliza una base de datos relacional para gestionar la información de los alojamientos y sus características. La base de datos está estructurada de la siguiente manera:

### Descripción de las Tablas y Relaciones

- **Alojamientos**: Tabla principal que almacena la información básica de cada alojamiento.
  - **Columnas**: `idAlojamiento`, `Titulo`, `Descripcion`, `Latitud`, `Longitud`, `PrecioPorDia`, `CantidadDormitorios`, `CantidadBanios`, `Estado`, `idTipoAlojamiento`.
  - **Relación**: Se relaciona con `TipoAlojamientos` y `AlojamientosServicios`.

- **TipoAlojamientos**: Define los diferentes tipos de alojamiento.
  - **Columnas**: `idTipoAlojamiento`, `Nombre`.
  - **Relación**: Relación 1:N con `Alojamientos`.

- **Servicios**: Almacena los servicios disponibles que se pueden ofrecer en los alojamientos.
  - **Columnas**: `idServicio`, `Nombre`.
  - **Relación**: Relación M:N con `Alojamientos` a través de `AlojamientosServicios`.

- **AlojamientosServicios**: Relaciona alojamientos con servicios, permitiendo que un alojamiento tenga múltiples servicios y viceversa.
  - **Columnas**: `idAlojamiento`, `idServicio`.

- **Imágenes**: Almacena las URL de las imágenes asociadas a cada alojamiento.
  - **Columnas**: `idImagen`, `idAlojamiento`, `URL`.
  - **Relación**: Relación 1:N con `Alojamientos`.

## Importación del Dump de la Base de Datos

Para probar la aplicación web con datos reales, se ha incluido un dump de la base de datos que contiene registros de prueba. Siga estos pasos para importar el dump en MySQL Workbench:

1. **Abrir MySQL Workbench**: Inicie MySQL Workbench y conéctese a su servidor MySQL.
2. **Crear una Nueva Base de Datos**: Cree una nueva base de datos desde la pestaña `Schemas` haciendo clic derecho y seleccionando `Create Schema...`. Asigne un nombre a su base de datos.
3. **Importar el Dump**: 
   - Vaya a `Server` -> `Data Import`.
   - Seleccione `Import from Self-Contained File` y busque el archivo `dump.sql` incluido en la carpeta del proyecto.
   - En `Default Target Schema`, seleccione la base de datos que acaba de crear.
   - Haga clic en `Start Import` para comenzar la importación.
4. **Verificación**: Una vez completada la importación, verifique que las tablas y datos han sido importados correctamente navegando a la pestaña `Schemas` y expandiendo la base de datos creada.

## Conclusión

**Verde Nido** ofrece una experiencia completa y enriquecida para los usuarios que buscan alojamientos rodeados de naturaleza. La plataforma es intuitiva y cuenta con todas las funcionalidades necesarias para facilitar la búsqueda, exploración y reserva de alojamientos, tanto para los usuarios como para los administradores del sitio.

Si tienen alguna pregunta o necesitan más detalles sobre el proyecto, estamos a su disposición para responder y proporcionar toda la información necesaria.

---

¡Gracias por revisar nuestro proyecto! Esperamos que disfruten explorando **Verde Nido** tanto como nosotros disfrutamos desarrollándolo.
