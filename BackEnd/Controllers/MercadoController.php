<?php

    require_once __DIR__ . '/../Models/ProductoDAO.php';
    $funcion = $_GET['function'];
    switch ($funcion) {
        case "agregar":
            agregarProducto();
         break;    
    }

    function agregarProducto(){
        $id = $_POST['id'];
        $titulo = $_POST['titulo'];
        $permalink = $_POST['permalink'];
        $tumbnail = $_POST['tumbnail'];
        $precio = $_POST['precio'];
        $resultado = (new ProductoDAO())->agregarProductoDAO($id, $titulo, $permalink, $tumbnail, $precio);
        echo json_encode($resultado);
    }

    
?>