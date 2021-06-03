# TuRock

TuRock es un proyecto SPA desarrollada con el Framewok Angular y generado con [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2. Este proyecto se usa para el aprendizaje y muestra de capacidades. Siéntase libre de clonar este proyecto.


## Servicio:
La aplicación muestra 8 grupos de rock que son exportados desde el “grupos.service.ts” y que contiene un arreglo de objetos de grupos.
Propiedades del Objeto grupo: nombre, bio, img, aparición, vídeo, wiki y idx.


## Componentes globales (app/components):

Navbar y footer

## Componentes reutilizables (app/components):

group-card, header, share y slider.

## Componentes de Páginas (app/components/page):

group, groups, home, search y form.

## Pipes personalizado (app/components/pipes):

TuRock ya viene con un pipe personalizado para validar url.

## Otros datos de interés:

- TuRock usa formulario reactivo y ya integra lógica de validaciones.
- La parte del GRUD no está implementada.
- Para añadir un nuevo grupo, interactúa con el botón + en la esquina inferior derecha
- Dentro de la página de grupo, en el footer del artículo tiene las opciones de eliminar y editar 
- Preparada para adaptarse a dispositivos móviles y tabletas.

