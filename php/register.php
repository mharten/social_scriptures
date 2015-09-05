<?
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$email = $request->email;
$lastName = $request->lastName;
$firstName = $request->firstName;
$password = $request->password;
$username = $request->userName;


$json = '{"lastName":"'.$lastName.'","firstName":"'.$firstName.'","email":"'.$email.'","username":"'.$username.'","password":"'.$password.'"}';
echo $_POST['username'];
echo ($json);
?>