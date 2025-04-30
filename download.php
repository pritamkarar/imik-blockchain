<?php
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

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

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name     = htmlspecialchars($_POST['name']);
    $email    = htmlspecialchars($_POST['email']);
    $mobileno = htmlspecialchars($_POST['mobileno']);

    $subject = "New brochure download request - Blockchain Certification Program";
    $message = "
    <html>
    <head>
      <title>Form Submission</title>
    </head>
    <body>
      <h2>New brochure download request</h2>
      <p><strong>Name:</strong> $name</p>
      <p><strong>Email:</strong> $email</p>
      <p><strong>Mobile No:</strong> $mobileno</p>
    </body>
    </html>
    ";

    // Send email
    if (sendMailSMTP($subject, $message)) {
        echo "documents/imik-blockchain-brochure.pdf";
    } else {
        http_response_code(500);
        echo "Failed";
    }
}
?>
