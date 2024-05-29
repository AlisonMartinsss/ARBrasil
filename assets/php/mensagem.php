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
    'message_nome' => $_POST['message_nome'],
    'message_email' => $_POST['message_email'],
    'message_telefone' => $_POST['message_telefone'],
    'message_assunto' => $_POST['message_assunto'],
    'message_mensagem' => $_POST['message_mensagem']
];

$formDataHtml = "<h2>Dados do Formulário</h2>";
$formDataHtml .= "<p><strong>Nome:</strong> {$formData['message_nome']}</p>";
$formDataHtml .= "<p><strong>E-mail:</strong> {$formData['message_email']}</p>";
$formDataHtml .= "<p><strong>Telefone:</strong> {$formData['message_telefone']}</p>";
$formDataHtml .= "<p><strong>Assunto:</strong> {$formData['message_assunto']}</p>";
$formDataHtml .= "<p><strong>Mensagem:</strong> {$formData['message_mensagem']}</p>";

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

    $mail->isHTML(true);
    $mail->Subject = 'Nova mensagem recebida';
    $mail->Body    = $formDataHtml;
    $mail->AltBody = strip_tags($formDataHtml);

    $mail->send();
    $_SESSION['message_message'] = 'Mensagem enviada com sucesso!';
    header('Location: ../../#contact');
    exit;
} catch (Exception $e) {
    $_SESSION['error_message'] = "Erro ao enviar mensagem: {$mail->ErrorInfo}";
}
?>
