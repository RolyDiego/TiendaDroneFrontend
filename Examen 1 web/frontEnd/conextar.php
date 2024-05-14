<?php 

$link=mysqli_connect("localhost","root","","formulario");
  
 	//session_start();
     
   	 
   	 
    
    
     $consulta2="INSERT INTO `datos` (`id`, `name`, `email`, `password`) VALUES (NULL, 'sevas', 'sebas @hotmail.com', '123');";
     $resultado=mysqli_query( $link,$consulta2);
     
     echo "Registro Exitoso";
     
    ?>