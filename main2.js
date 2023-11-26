//PARA AGREGAR PRODUCTOS AL STORAGE

class accesorio{
    constructor (Id,nombre, precio, descripcion, imagen){
        this.Id=Id;
        this.nombre=nombre;
        this.precio=parseFloat(precio);
        this.descripcion=descripcion;
        this.imagen=imagen;                           }
        

                                                   
                 }

    const correa = new accesorio("1","correa", "200", "Para pasear perros", "imagenes/correa.jpg")
    const hueso =  new accesorio("2","hueso","150","comestible canino", "imagenes/hueso.jpg")
    const cucha = new accesorio("3","cucha","700", "Para dormir ", "imagenes/cucha.jpg")
    const jaula = new accesorio("4","jaula", "1400","Para trasladar mascotas","imagenes/jaula.jpg")
    const casa = new accesorio ("5","casa", "15000","cucha de exterior","imagenes/casita.jpg")
   
    const accesorios= []
    accesoriosArray.push (correa);
    accesoriosArray.push (hueso);
    accesoriosArray.push (cucha);
    accesoriosArray.push (jaula);
    accesoriosArray.push(casa);


    let sumarIva = (precio) => {
        let precioConIva = precio * 1.21 ;
          console.log(precioConIva);
      }
   


    ///////////////////////////////////////////////////
   localStorage.setItem("productos", JSON.stringify(accesorios));

   const agregarProducto = (nombre,precio,descripcion,imagen) => {
     let productosStorage = localStorage.getItem("accesorios");
     let productos = JSON.parse(productosStorage);

     let nvoProducto = {
        id: accesorios.length + 1,
        precio,
        descripcion,
        imagen
     };

     accesorios.push(nvoProducto);
     localStorage.setItem("productos", JSON.stringify(accesorios));
   };

   let nombre = prompt ("ingrese el nombre del producto a agregar");
   let precio = prompt ("ingrese el precio");
   let descripcion = prompt ("ingrese la descripcion");
   let imagen = prompt ("ingrese la url de la imagen");

   agregarProducto(nombre,precio,descripcion,imagen);
