import DAOMercado from "../Models/DAOMercado.js";

export default class MercadoController{

    DAOMercado;

    constructor(){
        this.DAOMercado = new DAOMercado();
    }

    async  obtenerProducto(){
        return await this.DAOMercado.obtenerProducto();
    }

}