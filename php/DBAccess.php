<?
class DBAccess
{
	protected $connection;
	
	public function connect()
	{
		$this->connection = mysql_connect('localhost', 'php', 'php-pass');
	}
	
}

echo class_exists(PDO);



if (!$link = mysql_connect('localhost', 'php', 'php-pass')) {
    echo 'Could not connect to mysql';
    exit;
}

if (!mysql_select_db('social_scriptures', $link)) {
    echo 'Could not select database';
    exit;
}
?>