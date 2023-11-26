    //CARRITO

let buttonDos= document.createElement ("button");
    buttonDos.innerHTML = `
    <button> VACIAR CARRITO </button>
    
    ` ;
    document.body.append(buttonDos);

    let carrito;
    let carritoStorage = localStorage.getItem("carrito");
    
    if (carritoStorage) {
        carrito = JSON.parse(carritoStorage);
    } else {
        carrito = [];
        let divDos = document.createElement("div");
        divDos.innerHTML = "Carrito vacio";
        document.body.append(divDos);
    }

      
    /*
    const agregar = (id) => {
        const accesorio = carrito.find ((item) => item.id === id );
        //if()
        
        //const suma =+ accesorio.precio; 
        let mensaje1 = `Producto: ${accesorio.nombre}agregado al carrito`;
       // let mensaje2 = `Total actual ${suma}`; 

        alert (mensaje1);
        //alert(mensaje2);
    };

    */

    carrito.forEach((item) =>  {
        let div = document.createElement("div");
        div.innerHTML = `
        <h3> Nombre: ${item.nombre} </h3>
        <p> Descripcion : ${item.descripcion} </p>
        <p> Precio: ${item.precio} </p>
        <img src="${item.imagen}" >
        <button id="botonUno ${item.Id}"> AGREGAR AL CARRITO </button>
        `;
        document.body.append(div);

        /*
        Let botonUno = document.getElementById(`botonUno${item.id}`);
        botonUno.addEventListener("click", () => agregar(item.id));
        */
    });


    buttonDos.addEventListener("click", () => {
        alert ("carrito eliminado");
        localStorage.clear();
        location.reload();
    });
    

    localStorage.setItem("carrito", JSON.stringify(accesorios));

    localStorage.setItem("productos", JSON.stringify(accesorios));

    const agregarProducto = (nombre,precio,descripcion,imagen) => {
      let productosStorage = localStorage.getItem("accesorios");
      let accesorios = JSON.parse(productosStorage);
 
      let nvoProducto = {
         id: accesorios.length + 1,
         nombre,
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
    let imagen = prompt ("ingrese la imagen");
 
    agregarProducto(nombre,precio,descripcion,imagen);