<?php
 
if(isset($_POST['email'])) {
 
     
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
 
    $email_to = "kahchunyap@gmail.com";
 
    $email_subject = "Message from Kevin Yap Portfolio";
 
     
 
     
 
    function died($error) {
 
        // your error code can go here
 
        echo "I'm sorry, but there were error(s) found with the form you submitted. ";
 
        echo "These errors appear below.<br /><br />";
 
        echo $error."<br /><br />";
 
        echo "Please go back and fix these errors.<br /><br />";
 
        die();
 
    }
 
     
 
    // validation expected data exists
 
    if(!isset($_POST['name']) ||
 
        !isset($_POST['email']) ||
 
        !isset($_POST['phone']) ||
 
        !isset($_POST['message'])) {
 
        died('Oops, seems like there is a problem with the form you submitted.');       
 
    }
 
     
 
    $name = $_POST['name']; // required
 
    $email_from = $_POST['email']; // required
 
    $phone = $_POST['phone']; // not required
 
    $message = $_POST['message']; // required
 
     
 
    $error_message = "";
 
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
 
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
 
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$name)) {
 
    $error_message .= 'The Name you entered does not appear to be valid.<br />';
 
  }
 
  if(strlen($error_message) > 0) {
 
    died($error_message);
 
  }
 
    $email_message = "Form details below.\n\n";
 
     
 
    function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
 
    }
 
     
 
    $email_message .= "Name: ".clean_string($name)."\n";
 
    $email_message .= "Email: ".clean_string($email_from)."\n";
 
    $email_message .= "Phone: ".clean_string($phone)."\n";
 
    $email_message .= "Message: ".clean_string($message)."\n";
 
     
 
     
 
// create email headers
 
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
@mail($email_to, $email_subject, $email_message, $headers);  
 
?>
 
 
 
<!-- include your own success html here -->
 
 
 
<!DOCTYPE HTML>
<html>

<head>
  <title>Contact - Kevin Yap</title>

  <link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico" />
  <link rel="icon" type="image/png" href="images/favicon.png" />

  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="A web designer portfolio site." />
  <meta name="keywords" content="kevin yap, web designer, front-end developer, bazoo, yap kah chun, coding, html5, css3, online portfolio, multimedia, design" />
  <meta name="author" content="Kevin Yap" />
  <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="css/reset.css" media="all"/>
  <link rel="stylesheet" type="text/css" href="css/style.css" media="all"/>
  <link rel="stylesheet" type="text/css" href="css/iphone-resolution.css"/>
  <link rel="stylesheet" type="text/css" href="css/ipad-resolution.css"/>
  <link rel="stylesheet" type="text/css" href="css/600x800-resolution.css"/>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
  <script src="js/smooth-scrolling.js"></script>

  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-48929461-1', 'comyr.com');
    ga('send', 'pageview');
  </script>

</head>

<body>
  <div id="wrapper">
    <header>
      <div id="logo">
        <a href="index.html"><img src="images/logo.svg" alt="Kevin Yap" title="Kevin Yap" display="block"></a>
      </div>

      <nav>
        <ul>
          <li><a href="index.html">Work</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </header>

    <div id="divider">
    </div>

    <h1 class="heading">
      Hello, is it me you're looking for?
    </h1>

    <form name="Contact" action="send_form_email.php" method="post">
      <input type="text" name="name" id="name" class="field" placeholder="Name">
      <input type="text" name="email" id="email" class="field" placeholder="E-mail">
      <textarea name="message" cols="30" id="message" placeholder="Message"></textarea>
      <input type="text" name="phone" id="phone" class="field" placeholder="Phone number">
      <input type="submit" value="&#149; Leave me a word! &#149;" id="Submit" class="submit-btn">
    </form>

    <section class="contact-info">
      <ul>
        <li><i class="fa fa-phone"></i><a href="tel:0172433168"> +6017 243 3168</a></li>
        <li><i class="fa fa-envelope-o"></i> <a href="mailto:kahchunyap@gmail.com">kahchunyap@gmail.com</a></li>
      </ul>
    </section>

    <div id="social-media-btn-wrapper">
      <div>
        <a href="http://www.behance.net/kevinyap" target="_blank"><img src="images/behance.png" alt="Behance" title="Behance"></a>
      </div>
      <div>
        <a href="http://www.facebook.com/kevin.bazoo" target="_blank"><img src="images/fb.png" alt="Facebook" title="Facebook"></a>
      </div>
      <div>
        <a href="http://www.linkedin.com/pub/kevin-yap/67/217/b31" target="_blank"><img src="images/linkedin.png" alt="Linkedin" title="Linkedin"></a>
      </div>
    </div>
  </div>

  <a href="#" class="back-to-top">Back to Top</a>

  <footer>
      Copyright &#169; 2014 by Kevin Yap
  </footer>
</body>

</html>
 
 
 
<?php
 
}
 
?>