/*https://api.mercadolibre.com/sites/MLU/search?category=MLU1144*/

export default class PersonajesDAO{

    async  obtenerProducto(){
        let url = `https://api.mercadolibre.com/sites/MLU/search?category=MLU1144`;
        let consulta = await fetch(url);
        let datos = await consulta.json();
        let productos = datos.results;
        return productos;
    }
    
}