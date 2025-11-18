# Mini Ecommerce


Para este proyecto tenemos un archivo html donde podremos ver el diseño. (No se hace todo en la misma pagina)

Habran 3 secciones. En todas aparecera la barra de menu de arriba.

- Home.
  - Aparecera el listado de productos.
  - Este listado teneis que crearlo vosotros en un array de objetos que luego usareis para pintar los productos
  - Cuando le demos añadir a alguno de los productos el numero del menu (Carrito (X)) aumentara
  - Cuando le demos eliminar a alguno de los productos el numero del menu (Carrito (X)) disminuira
  - Cuando hagamos click en la card del producto navegara a detail/:id
 
- Detalle Producto.
  - Dependiendo del ID mostraremos en otra seccion el Menu + Detalle de producto
  - Los botones funcionaran igual que en la home
 
- Carrito.
  - Al pulsar en la palabra carrito del menu iremos a /cart donde mostraremos el listado de productos igual que en el template.
  - Si hay mas de una unidad de producto aparecera el numero de unidades donde creas conveniente
  - Si le damos a eliminar se eliminar solo una unidad. Si pasa a cero desaparecera del listado.
 
  - Tendremos que hacerlo Tanto con React usando React Router como con Next con su sistema de Rutas.
  - Tendremos que hacer tambien una version con ContextAPI y otra con Zustand

  
