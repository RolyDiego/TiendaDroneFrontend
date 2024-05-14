<?php 


$correo=$_REQUEST["correo"];
$pwd=$_REQUEST["contraseña"];
$link=mysqli_connect("localhost","root","","formulario");
  
//session_start();

   
   


$consulta2="select * from datos where email='$correo' and password='$pwd'";
$resultado=mysqli_query( $link,$consulta2);
$número_filas = mysqli_num_rows($resultado);
if ($número_filas==0) {
    echo "No Encontrado";
}
else{
    echo "Exitoso";
}





?>