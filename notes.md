# Notes

## HTML5 pushState routes
- base href element with desired prefix (eg: admin)
  - with trailing slash
- avoid the prefix in the routes
- use ui-sref
- ojo con usar `.` en los state names, porque significa nested states! (dar mini explicacion?)

## Directives
- Attribute vs Element:
  - When should I use an attribute versus an element? Use an element when you are creating a component that is in control of the template. The common case for this is when you are creating a Domain-Specific Language for parts of your template. Use an attribute when you are decorating an existing element with new functionality. -- [ref](https://docs.angularjs.org/guide/directive)
- Scope binding
  - using @ vs = [info](http://stackoverflow.com/questions/14050195/what-is-the-difference-between-and-in-directive-scope)

## LocalStorage first
Cuando arrancamos a prototipar es comodo arrancar con un servicio que persista LocalStorage del browser y después es cuestión de cambiar el servicio o crear un nuevo servicio que se conecte con la API que realizaremos en CUBA

## Partials
- Ruta generica para partials para poder usar HAML (ojo con temas de seguridad, no production ready!)

## markdown help
- hack de clases para hacer que no se vea hasta que cargo todo -- [ref](http://stackoverflow.com/questions/17985390/angular-animate-ng-cloak-opacity)

## Loading
- events on ui-router -- [ref](http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state)

## Comparacion
Para que puedan entender las ventajas facilmente podemos hacer un quick rails scaffolding y mostrar como siempre hace page reload y que para cada interacción deberíamos agregar código extra js o plugins.

## API
- $http vs [$resource](https://docs.angularjs.org/api/ngResource/service/$resource)

## general
- Agregar la dependencia en todos lados (eg: ngResource)

## UI Router
Para poder cambiar de estado en los diferentes jsControllers hay que inyectar $state.
De esta manera se puede hacer $state.go('articles'); por ejemplo.