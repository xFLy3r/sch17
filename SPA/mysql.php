<?
$host = 'mysql.zzz.com.ua';
$login = 'host2280';
$password = 'Sanes0Play';
$db = 'artur_yurko';

$GLOBALS['sql'] = mysqli_connect($host,$login,$password,$db);
if (!$GLOBALS['sql']) {
	echo "Не удалось подключиться к MySQL: " . mysqli_connect_error();
}
mysqli_set_charset($GLOBALS['sql'], "utf8");
?>