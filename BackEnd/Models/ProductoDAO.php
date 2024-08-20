<?php

require_once __DIR__ . '/../Connection/connection.php';

class ProductoDAO {

    public function agregarProductoDAO($id, $titulo, $permalink, $tumbnail, $precio){
        $sql = "INSERT INTO productos(id, title, permalink, thumbnail, precio) VALUES ('$id', '$titulo', '$permalink', '$tumbnail', '$precio')";
        $connection = connection();
        $respuesta = $connection->query($sql);
        return $respuesta;
    }

}

?>