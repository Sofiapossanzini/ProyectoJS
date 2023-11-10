
    document.body.className= "beige";
   
   //menu opciones
    let menuOpciones = document.createElement ("ul");
    menuOpciones.innerHTML =  
    "<li>Home</li> <li>Articulos</li> <li>Destacados</li> <li>Galeria</li>" ;
    document.body.append(menuOpciones);

   
    let tituloPrincipal = document.createElement("h1");
    tituloPrincipal.innerHTML = "<h1>TIENDA DE ACCESORIOS PARA LAS MASCOTAS </h1>";
    document.body.append(tituloPrincipal);
 
    let tituloSecundario = document.createElement("h2");
    tituloSecundario.innerHTML = "<h2></h2>";
   document.body.append(tituloSecundario);
    
   
   let seccion = prompt ("ingrese la seccion que quiere ver (home, articulos, destacados,galeria");

    if(seccion === "articulos" || seccion === "ARTICULOS"){
        tituloSecundario.innerHTML= " ARTICULOS QUE OFRECEMOS";
        
        class accesorio{
            constructor (nombre, precio, descripcion, imagen){
                this.nombre=nombre;
                this.precio=parseFloat(precio);
                this.descripcion=descripcion;
                this.imagen=imagen;
                this.vendido=false;
        
            }
            sumarIva(){
                this.precio = this.precio + this.precio * 0.21 ;
            }
            vendido(){
                this.vendido=true;
            }
           }
        
            const correa = new accesorio("correa", "200", "Para pasear perros", "img1")
            const hueso =  new accesorio("hueso","150","comestible canino", "img2")
            const cucha = new accesorio("cucha","700", "Para dormir ", "img3")
            const jaula = new accesorio("jaula", "1400","Para trasladar mascotas","img4")
           
            const accesoriosArray = []
            accesoriosArray.push (correa);
            accesoriosArray.push (hueso);
            accesoriosArray.push (cucha);
            accesoriosArray.push (jaula);
        
           correa.sumarIva();
           hueso.sumarIva();
           cucha.sumarIva();
           jaula.sumarIva();
        
           accesoriosArray.forEach ((accesorio) => {
            let div  = document.createElement("div");
            div.innerHTML = `  
            <h3> Accesorio : ${accesorio.nombre} </h3>
             Descripcion : ${accesorio.descripcion}
              `
              document.body.append(div);
            
            let button = document.createElement("button");
            button.innerHTML =  "<button>VER PRECIO</button>";
            button.onclick = (accesorio) => { `Precio : ${accesorio.precio}`};
            document.body.append(button);
            
            

            })  
        
        
    } else { if(seccion === "destacados" || seccion === "DESTACADOS"){
        tituloSecundario.innerHTML= "ARTICULOS DESTACADOS";
        
    } else if(seccion === "galeria" || seccion === "GALERIA "){
       tituloSecundario.innerHTML= "GALERIA: Nuestros bellos clientes usando nuestros productos";
       
    }else { 
       tituloSecundario.innerHTML= "HOME";
       
    }
    }



    let piePagina = document.getElementsByTagName("footer");
    console.log (piePagina.innerHTML);

    
     
