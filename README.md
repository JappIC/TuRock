# TuRock

TuRock es un proyecto SPA desarrollada con el Framewok Angular y generado con [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2. Este proyecto se usa para el aprendizaje y muestra de capacidades. Siéntase libre de clonar este proyecto.

<img src="/src/assets/img/TuRock-page-grupos.png" alt="Captura de imagen TuRock"/>

## Servicio:
La aplicación muestra 8 grupos de rock que son exportados desde el “grupos.service.ts” y que contiene un arreglo de objetos de grupos.
Propiedades del Objeto grupo: nombre, bio, img, aparición, vídeo, wiki y idx.

## Componentes globales (app/components):
Los componentes globales son siempre visible en todas las partes de al app
### Navbar
Es el componente encargado del header principal de la app, menú de navegación y datos de usuario.
### Footer
Contiene el título con copyright y el botón añadir nuevo grupo.


## Componentes reutilizables (app/components):
Los componentes reutilizables están preparados para poder añadirlos en las diferentes partes de la app
### group-card
Es el contenedor de las tarjetas de presentación de los grupos. 
### Header
La cabecera genérica utilizada en las páginas.
### share 
Permite compartir e imprimir la página.
### Slider
Un deslizador hecho en css.


## Componentes de Páginas (app/components/page):
Los componentes de página se encargan de unificar los diferentes reutilizables y lógica
### group
Muestra un grupo individual.
### Groups
Muestra todos los grupos.
### Home
Portada principal de la app.
### Search
Encargada de mostrar los resultados de busqueda. 
### Form
El formulario de registro de nuevo grupo.

## Pipe personalizado (app/components/pipes):

TuRock ya viene con un pipe personalizado para validar url.

## Otros datos de interés:

- TuRock usa formulario reactivo y ya integra lógica de validaciones.
- La parte del GRUD no está implementada.
- Para añadir un nuevo grupo, interactúa con el botón + en la esquina inferior derecha
- Dentro de la página de grupo, en el footer del artículo tiene las opciones de eliminar y editar 
- Preparada para adaptarse a dispositivos móviles y tabletas.

<img src="/src/assets/img/TuRock-page-grupos.png" alt="Página grupos"/>
<img src="/src/assets/img/TuRock-page-grupo.png" alt="Página grupo"/>
<img src="/src/assets/img/TuRock-page-form-validacion.png" alt="Página formulario"/>
<img src="/src/assets/img/TuRock-movil.png" alt="Vista de movil"/>
