window.onload= async()=>{
   // let productos = await new MercadoController().obtenerProducto();
   let productos = await obtenerProducto();
   mostrarProductos(productos);
 }

 function mostrarProductos(productos){
    let thProductoElement = document.querySelector("#tableProductos");
    productos.forEach(producto => {
       let filaProducto = document.createElement("tr");
       filaProducto.innerHTML = `
                    <td><p>${producto.title}</p></td>
                    <td><a href="${producto.permalink}" target="_blank">Ver en mercado libre</a></td>
                    <td><img src="${producto.thumbnail}" alt="ERROR"></td>
                    <td><p>$ ${producto.price}</p></td>
       `;
       let botonProducto = document.createElement("button");
       filaProducto.appendChild(botonProducto);
       botonProducto.innerHTML = "Guardar"
       botonProducto.onclick = () =>{
         guardarProducto(producto);
       }
       thProductoElement.appendChild(filaProducto);
      });
}

async function obtenerProducto(){
   let url = "https://api.mercadolibre.com/sites/MLU/search?category=MLU1144";
   let consulta = await fetch(url);
   let datos = await consulta.json();
   let productos = datos.results;
   console.log('productos>: ', productos);
   return productos;
}


async function guardarProducto(producto){
   let dataProducto = new FormData();
   dataProducto.append('id', producto.id)
   dataProducto.append('titulo', producto.title);
   dataProducto.append('permalink', producto.permalink);
   dataProducto.append('thumbnail', producto.thumbnail);
   dataProducto.append('precio', producto.price);
   let url = window.location.origin + "/API-MercadoLibre-Pesuuti/backEnd/controller/MercadoController.php?funcion=agregar";
   let config = {
       method: 'POST' ,
       body: dataProducto
   }
   let respuesta = await fetch(url, config);
   let datosRespuesta = await respuesta.json();
   if(datosRespuesta){
       alert("Producto agregado con exito");
   }
   else{
       alert("Error al agregar el producto");
   }
}