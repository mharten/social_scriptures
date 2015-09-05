<?
$json = '[{
			"lastName":"'.$_POST['lastName'].'",
			"firstName":"'.$_POST['firstName'].'",
			"email":"'.$_POST['email'].'",
			"username":"'.$_POST['username'].'",
			"password":"'.$_POST['password'].'"
		}]';

echo json_encode($json);
?>