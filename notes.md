# Notes

## HTML5 pushState routes
- base href element with desired prefix (eg: admin)
  - with trailing slash
- avoid the prefix in the routes
- use ui-sref
- ojo con usar `.` en los state names, porque significa nested states! (dar mini explicacion?)

## LocalStorage first
Cuando arrancamos a prototipar es comodo arrancar con un servicio que persista LocalStorage del browser y después es cuestión de cambiar el servicio o crear un nuevo servicio que se conecte con la API que realizaremos en CUBA

## Partials
- Ruta generica para partials para poder usar HAML (ojo con temas de seguridad, no production ready!)
