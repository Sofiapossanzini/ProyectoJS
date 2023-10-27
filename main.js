
    document.body.className= "beige";
    let titulo = document.getElementById ("titulo");

    let bienvenida = document.getElementById("bienvenida");
    let seccion = prompt ("ingrese la seccion que quiere ver (home, articulos, destacados,galeria");

    if(seccion === "articulos" || seccion === "ARTICULOS"){
        bienvenida.innerHTML= " BIENVENIDOS A LOS ARTICULOS DE MEJOR CALIDAD Y PRECIO";
        bienvenida.className = "coral";
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
             Precio : ${accesorio.precio}
             Descripcion : ${accesorio.descripcion}
             <hr/>  
             `
            document.body.append(div);
            })
        
        
    } else { if(seccion === "destacados" || seccion === "DESTACADOS"){
        bienvenida.innerHTML= "BIENVENIDOS A LOS ARTICULOS DESTACADOS";
        bienvenida.className = "coral";
    } else if(seccion === "galeria" || seccion === "GALERIA "){
       bienvenida.innerHTML= "Conozcan nuestros bellos clientes usando nuestros productos";
       bienvenida.className = "coral";
    }else { 
       bienvenida.innerHTML= "NOSOTROS Y NUESTROS PRODUCTOS";
       bienvenida.className = "rojo";

    }
    }