<?
$json = '[{
			"username":"'.$_POST['lastName'].'",
			"password":"'.$_POST['firstName'].'",
			"password":"'.$_POST['email'].'",
			"password":"'.$_POST['username'].'",
			"password":"'.$_POST['password'].'"
		}]';

echo json_encode($json);
?>

user_id
lastName
firstName
email
creationDate
username
password