<?php 

$usuario=$_REQUEST["usuario"];
$correo=$_REQUEST["correo"];
$pwd=$_REQUEST["contraseña"];
//concecta a nuestra base datis n¿mysql
$link=mysqli_connect("localhost","root","","formulario");
  
//session_start();

   
   


$consulta2="INSERT INTO `datos` (`id`, `name`, `email`, `password`) VALUES (NULL, '$usuario', '$correo', '$pwd');";
$resultado=mysqli_query( $link,$consulta2);

echo "Registro Exitoso";



?>