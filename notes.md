# Notes

## Conectar con API
- [$http](https://docs.angularjs.org/api/ng/service/$http)
- [$resource](https://docs.angularjs.org/api/ngResource/service/$resource)
- [restangular](https://github.com/mgonto/restangular)

## Tags
- Usamos [ngList](https://docs.angularjs.org/api/ng/directive/ngList) para hacer una interaccion copada con el string delimitado por comas
- En el repeat, usamos `track by $index` para que no pinche con duplicados -- [ref](https://docs.angularjs.org/error/ngRepeat/dupes?p0=tag%20in%20article.tags&p1=string:tag&p2=%22tag%22)

## Directives
- Attribute vs Element:
  - When should I use an attribute versus an element? Use an element when you are creating a component that is in control of the template. The common case for this is when you are creating a Domain-Specific Language for parts of your template. Use an attribute when you are decorating an existing element with new functionality. -- [ref](https://docs.angularjs.org/guide/directive)
- Scope binding
  - @ vs = [info](http://stackoverflow.com/questions/14050195/what-is-the-difference-between-and-in-directive-scope)

## HTML5 pushState routes
- base href element with desired prefix (eg: admin)
  - with trailing slash
- avoid the prefix in the routes
- use ui-sref
- ojo con usar `.` en los state names, porque significa nested states! (dar mini explicacion?)

## UI Router
- Para poder cambiar de estado en los diferentes jsControllers hay que inyectar $state. De esta manera se puede hacer $state.go('articles')

## Markdown help
- Hack de clases para hacer que no se vea hasta que cargo todo -- [ref](http://stackoverflow.com/questions/17985390/angular-animate-ng-cloak-opacity)

