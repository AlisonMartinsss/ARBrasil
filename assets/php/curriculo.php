<?php

session_start();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require "src/Exception.php";
require "src/PHPMailer.php";
require "src/SMTP.php";

$mail = new PHPMailer(true);

$formData = [
    'work_nome' => $_POST['work_nome'],
    'work_email' => $_POST['work_email'],
    'work_telefone' => $_POST['work_telefone'],
    'work_cargo' => $_POST['work_cargo']
];

$formDataHtml = "<h2>Dados do Formulário</h2>";
$formDataHtml .= "<p><strong>Nome:</strong> {$formData['work_nome']}</p>";
$formDataHtml .= "<p><strong>E-mail:</strong> {$formData['work_email']}</p>";
$formDataHtml .= "<p><strong>Telefone:</strong> {$formData['work_telefone']}</p>";
$formDataHtml .= "<p><strong>Cargo:</strong> {$formData['work_cargo']}</p>";

try {
    $mail->CharSet = 'UTF-8';  
    $mail->isSMTP();
    $mail->Host = 'smtp.office365.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'arbrasil@arbrasil.com';
    $mail->Password = 'Jah50995';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom('arbrasil@arbrasil.com', 'Não Responda | AR Brasil');
    $mail->addAddress('tecnologia3@arterminais.com.br');

    
    if (isset($_FILES['work_curriculo']) && $_FILES['work_curriculo']['error'] == UPLOAD_ERR_OK) {
        $uploadFilePath = $_FILES['work_curriculo']['tmp_name'];
        $uploadFileName = $_FILES['work_curriculo']['name'];
        $mail->addAttachment($uploadFilePath, $uploadFileName);
    }

    $mail->isHTML(true);
    $mail->Subject = 'Novo currículo recebido';
    $mail->Body    = $formDataHtml;
    $mail->AltBody = strip_tags($formDataHtml);

    $mail->send();
    $_SESSION['message_curriculo'] = 'Currículo enviado com sucesso!';
    header('Location: ../../#curriculo');
    exit;
} catch (Exception $e) {
    $_SESSION['error_curriculo'] = "Erro ao enviar currículo: {$mail->ErrorInfo}";
}
?>
