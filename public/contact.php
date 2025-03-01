
<?php
//Importamos las variables del formulario de contacto

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

    @$Nombre = htmlspecialchars($_POST['Nombre']);
    @$Motivo = htmlspecialchars($_POST['Motivo']);
    @$Correo = htmlspecialchars($_POST['Correo']);
    @$Mensaje = htmlspecialchars($_POST['Mensaje']);

    //Preparamos el mensaje de contacto
    $cabeceras = "From: $Correo\n" //La persona que envia el correo
    . "Reply-To: $Correo\n";
    $asunto = "From: CONTACTO MANO AMIGA $Motivo\n"; //asunto aparecera en la bandeja del servidor de correo
    $email_to = "contacto@manoamiga.nz";  
    $contenido = "$Nombre te ha enviado un mensaje:\n"
    . "\n"
    . "Nombre: $Nombre\n"
    . "Motivo: $Motivo\n"
    . "Correo: $Correo\n"
    . "Mensaje: $Mensaje\n"
    . "\n";

$result = false;
try{
    $result = @mail($email_to, $asunto ,$contenido ,$cabeceras);
} catch(Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}


    //Enviamos el mensaje y comprobamos el resultado
    if ($result){

        $data = "MENSAJE ENVIADO CON EXITO";
        header_remove();
        http_response_code(200);
        header('Content-Type: application/json');
        header('charset=utf-8');
        echo json_encode($data);
 
    } else { 
        $data = "ERRROR AL ENVIAR EL MENSAJE, INTENTE  MAS TARDE PORFAVOR";
        header_remove();
        http_response_code(500);
        header('Content-Type: application/json');
        header('charset=utf-8');
        echo json_encode($data);
    }

?>
