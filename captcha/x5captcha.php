<?php
include("../res/x5engine.php");
$nameList = array("ck7","kf6","g73","rau","p32","4xk","aum","u3y","xg4","duc");
$charList = array("8","T","Y","2","P","T","Y","D","5","G");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
