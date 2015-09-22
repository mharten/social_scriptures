<?
class DBAccess
{
	protected $connection;
	
	public function connect()
	{
		$this->connection = mysql_connect('localhost', 'php', 'php-pass');
	}
	
}

echo "We have PDO: " . class_exists(PDO) . "?<br>";
echo "We have mysql: " . function_exists(mysql_connect) . "?<br>";
echo "We have mysqli: " . class_exists(mysqli) . "?<br>";
echo "We have money: " . function_exists(monetuisxeuf) . "?<br>";



/*if (!$link = mysql_connect('localhost', 'php', 'php-pass')) {
    echo 'Could not connect to mysql';
    exit;
}

if (!mysql_select_db('social_scriptures', $link)) {
    echo 'Could not select database';
    exit;
}*/
?>