# Unibo - Prueba Técnica

Desarrollo de un backend y un backend for front end.

## Objectivos

Crear las llamas a la API de https://jsonplaceholder.typicode.com para acceder a los siguientes elementos:

  :white_check_mark: Obtener todos los Post.

  :white_check_mark: Crear un Post.

  :white_check_mark: Editar un Post.

  :white_check_mark: Obtener un Post en concreto.

  :white_check_mark: Obtener un Post detallado (que incluya los datos del autor del post y todos los comentarios del post).


## Consideraciones

Antes de esta prueba técnica no habia usado nunca NestJs. Todo lo creado es con el aprendizaje de una tarde, de modo que seguro que hay formas de mejorar los presentado.

## Puntos de Mejora

- Al obtener los comentarios, la API devuelve todos los comentarios, no los de un post concreto, de modo que hay que filtrarlos manualmente. Lo ideal si tuvieramos acceso a la API seria poder hacer el filtrado directamente al hacer la solicitud.
- Seria necesario implementar test automaticos con Jest (no se ha hecho por falta de tiempo).