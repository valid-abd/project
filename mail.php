<?php
$to      = "megalodon-crm@yandex.ru";
$subject = 'Megalodon CRM';

$name = trim($_POST['name']);
$tel = trim($_POST['tel']);
$email = trim($_POST['email']);
$skype = trim($_POST['skype']);
$hidden = trim($_POST['hidden']);

$message = "$hidden $name $tel $email $skype";


$headers = "From: Megalodon CRM <info@{$_SERVER[ 'HTTP_HOST']}>" . "\r\n" .
"Reply-To: info@{$_SERVER[ 'HTTP_HOST']}" . "\r\n" .
'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>