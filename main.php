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

function sendMailSMTP($subject, $htmlBody, $plainTextBody = '') {
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
      $toEmail          = $_ENV['TO_EMAIL'];
      
      $mail->setFrom($_ENV['FROM_EMAIL'], $_ENV['FROM_NAME']);
      $mail->addAddress($toEmail);

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

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name     = htmlspecialchars($_POST['name']);
    $email    = htmlspecialchars($_POST['email']);
    $mobileno = htmlspecialchars($_POST['mobileno']);
    $city     = htmlspecialchars($_POST['city']);

    $subject = "New Form Submission";    
    $message = "
    <html>
    <head>
      <title>Form Submission</title>
    </head>
    <body>
      <p><strong>Name:</strong> $name</p>
      <p><strong>Email:</strong> $email</p>
      <p><strong>Mobile No:</strong> $mobileno</p>
      <p><strong>City:</strong> $city</p>
    </body>
    </html>
    ";

    // Send email
    if (sendMailSMTP($subject, $message)) {
        echo "Success";
    } else {
        http_response_code(500);
        echo "Failed";
    }
}
?>
