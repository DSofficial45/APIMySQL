window.onload = async () => {
   let productos = await obtenerProducto();
   mostrarProductos(productos);
}

async function obtenerProducto() {
   let url = "https://api.mercadolibre.com/sites/MLU/search?category=MLU1144";
   let consulta = await fetch(url);
   let datos = await consulta.json();
   let productos = datos.results;
   console.log('productos>: ', productos);
   return productos;
}

function mostrarProductos(productos) {
   let thProductoElement = document.querySelector(".tbodyProducto");
   productos.forEach(producto => {
       let filaProducto = document.createElement("tr");
       filaProducto.innerHTML = `
           <td><p>${producto.title}</p></td>
           <td><a href="${producto.permalink}" target="_blank">Ver en mercado libre</a></td>
           <td><img src="${producto.thumbnail}" alt="ERROR"></td>
           <td><p>$${producto.price}</p></td>
       `;
       let tdBtn = document.createElement("td");
       let btnFila = document.createElement("button");
       tdBtn.appendChild(btnFila);
       filaProducto.appendChild(tdBtn);
       btnFila.innerHTML = "Guardar";
       btnFila.onclick = () => {
           guardarProducto(producto);
       }
       thProductoElement.appendChild(filaProducto);
   });
}

async function guardarProducto(producto) {
   let dataProducto = new FormData();
   dataProducto.append("titulo", producto.title);
   dataProducto.append("permalink", producto.permalink);
   dataProducto.append("tumbnail", producto.thumbnail);
   dataProducto.append("precio", producto.price);
   dataProducto.append("id", producto.catalog_product_id);
   
   // Ajusta la URL para que coincida con la estructura de tu proyecto
   let url = window.location.origin + "/BackEnd/Controllers/MercadoController.php?function=agregar";
   
   let config = {
       method: 'POST',
       body: dataProducto
   }
   
   let respuesta = await fetch(url, config);
   let datosRespuesta = await respuesta.json();
   
   if (datosRespuesta) {
       alert("Producto agregado con éxito");
   } else {
       alert("Error al agregar el producto");
   }
}
