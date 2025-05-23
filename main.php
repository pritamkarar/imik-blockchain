<?php
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

// Simple .env loader
function loadEnv($path = '.env') {
    if (!file_exists($path)) return;
    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) continue; // skip comments
        list($key, $value) = explode('=', $line, 2);
        $_ENV[trim($key)] = trim($value);
    }
}

loadEnv(); // Load the environment variables

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function sendMailSMTP($subject, $htmlBody, $plainTextBody = '', $toEmail = null) {
  $mail = new PHPMailer(true);

  try {
      // Server settings
      $mail->isSMTP();
      $mail->Host       = $_ENV['SMTP_HOST'];
      $mail->SMTPAuth   = true;
      $mail->Username   = $_ENV['SMTP_USERNAME'];
      $mail->Password   = $_ENV['SMTP_PASSWORD'];
      $mail->SMTPSecure = $_ENV['SMTP_ENCRYPTION'];
      $mail->Port       = $_ENV['SMTP_PORT'];
      $toEmail          = $toEmail ?: $_ENV['TO_EMAIL'];
      
      $mail->setFrom($_ENV['FROM_EMAIL'], $_ENV['FROM_NAME']);
      $mail->addAddress($toEmail);
      $mail->addCC('admin@swaranshitsolutions.in', 'Swaransh IT Solutions');
      $mail->addCC('pritamkarar2@gmail.com', 'Pritam Karar');

      // Content
      $mail->isHTML(true);
      $mail->Subject = $subject;
      $mail->Body    = $htmlBody;
      $mail->AltBody = $plainTextBody ?: strip_tags($htmlBody);

      $mail->send();
      return true;
  } catch (Exception $e) {
      error_log("Mailer Error: {$mail->ErrorInfo}");
      return false;
  }
}

function sendAdminEmail($name, $email, $mobileno, $city, $type) {
    $subject = "New enrollment form submission - Blockchain Certification Program";
    $message = "
    <html>
    <head>
      <title>Form Submission</title>
    </head>
    <body>
      <h2>New enrollment form submission</h2>
      <p><strong>Name:</strong> $name</p>
      <p><strong>Email:</strong> $email</p>
      <p><strong>Mobile No:</strong> $mobileno</p>
      <p><strong>City:</strong> $city</p>
      <p><strong>Type:</strong> $type</p>
    </body>
    </html>
    ";

    return sendMailSMTP($subject, $message);
}

function sendStudentEmail($name, $email, $type) {
    $subject = "Enrollment submission - Certificate programme in Blockchain (IMIK & Swaransh IT Solutions)";
    $template = file_get_contents('documents/mail-template.html');

    $variables = [
        '{{studentName}}' => $name,
        '{{paymentLink}}' => $type == "individual" ? $_ENV['PAYMENT_LINK_INDIVIDUAL'] : $_ENV['PAYMENT_LINK_GROUP'],
    ];

    foreach ($variables as $key => $value) {
        $template = str_replace($key, $value, $template);
    }

    return sendMailSMTP($subject, $template, '', $email);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name     = htmlspecialchars($_POST['name']);
    $email    = htmlspecialchars($_POST['email']);
    $mobileno = htmlspecialchars($_POST['mobileno']);
    $city     = htmlspecialchars($_POST['city']);
    $type     = htmlspecialchars($_POST['type']);

    $mailSent = false;
    
    $mailSent = sendAdminEmail($name, $email, $mobileno, $city, $type);
    if($mailSent) {
        $mailSent = sendStudentEmail($name, $email, $type);
    }

    if ($mailSent) {
        echo "Success";
    } else {
        http_response_code(500);
        echo "Failed";
    }
}
?>
