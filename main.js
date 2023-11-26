
   let enc = document.getElementById("encabezado");
   enc.innerHTML=   `  <img src="imagenes/huesitos.jpg" alt="huellas"> ` ;
   

    let cuerpo = document.getElementById("cuerpo");
    cuerpo.innerHTML = `
    <h1> ♡ PETS LOVER ♡ </h1>
    <h2>TIENDA DE ACCESORIOS PARA LAS MASCOTAS </h2>
    <h3> Nuestros peludos son parte de nuestra familia y por eso aca vas a encontrar todo para mimarlos ♥  ♥  ♥ </h3>
    `
    cuerpo.className= "letra";
   
   
    class accesorio{
        constructor (id,nombre, precio, descripcion, imagen){
            this.id=id;
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
       
        const accesorios = []
        accesorios.push (correa);
        accesorios.push (hueso);
        accesorios.push (cucha);
        accesorios.push (jaula);
        accesorios.push(casa);


        let sumarIva = (precio) => {
            let precioConIva = precio * 1.21 ;
              console.log(precioConIva);
          }
        

        document.body.className = "fondo";    
       
       
        /*
    
        const agregarACarrito = (id) => {
        const accesorioCarrito = accesorios.find((item) => item.id === id);

        let mensaje = `
        Agregaste al carrito el producto: ${accesorioCarrito.nombre} 
        cuyo valor es $ ${accesorioCarrito.precio}
        `;
        alert (mensaje);
        
        //localStorage.setItem("accesorioCarrito", JSON.stringify(accesorioCarrito));
            
          };

          */

          localStorage.setItem("accesorios", JSON.stringify(accesorios));

         const agregarACarrito = (id) => {
         let accesoriosStorage = localStorage.getItem("accesorios");
         let accesoriosSt = JSON.parse(accesoriosStorage);
        
         let nvoAccesorio = accesorios.find((item) => item.id === id);
        
         accesoriosSt.push(nvoAccesorio);

            localStorage.setItem("accesorios", JSON.stringify(accesoriosSt));
           };

        
        const eliminarDeCarrito = (id) => {
            let accesoriosStorage = localStorage.getItem("accesorios");
            let accesorios = JSON.parse(accesoriosStorage);

            let filtrados = accesorios.filter ((item)=> item.id != id );
            localStorage.setItem("filtrados", JSON.stringify(filtrados));


        }



         
        accesorios.forEach ( (item) =>   {
                
            let div = document.createElement("div");
            div.innerHTML = `
            <h3> Nombre: ${item.nombre} </h3>
            <p> Descripcion : ${item.descripcion} </p>
            <p> Precio: ${item.precio} </p>
            <img src="${item.imagen}" >
            <button id="botonUno${item.id}"> AGREGAR AL CARRITO </button>
            <hr>
        `;  
             document.body.append(div);
             
             
            let botonUno = document.getElementById(`botonUno${item.id}`);
            botonUno.addEventListener("click", () => agregarACarrito(item.id));
        
    });
        
    let formulario = document.getElementById("formulario");
    formulario.className="formulario";

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let inputs = e.target.children;
        let cantidad = inputs[0].value;
        let idArticulo = inputs[1].value;

    } )

   

             
                                                
            
           
        

      

     
    

