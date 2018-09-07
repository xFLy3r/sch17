<?php
$host = 'mysql.zzz.com.ua';
$login = 'host2280';
$password = 'Sanes0Play';
$db = 'artur_yurko';

$sql = mysqli_connect($host,$login,$password,$db);
if (!$sql) {
	echo "Не удалось подключиться к MySQL: " . mysqli_connect_error();
}
mysqli_set_charset($sql, "utf8");

for($day=1; $day<=5; $day++){
	for($i=1; $i <= 8; $i++){
		if (isset($_POST[$day.$i.'1']))
			$arr[$i - 1] = $_POST[$day.$i].'<^>'.$_POST[$day.$i.'1'];
		else
			$arr[$i - 1] = $_POST[$day.$i];

		if (isset($_POST['lesson'.$day.$i.'1'])){
			if ($_POST['lesson'.$day.$i.'0'] == '' or $_POST['lesson'.$day.$i.'1'] == '')
				$less[$i - 1] = $_POST['lesson'.$day.$i.'0'].$_POST['lesson'.$day.$i.'1'];
			else 
				$less[$i - 1] = $_POST['lesson'.$day.$i.'0'].'<^>'.$_POST['lesson'.$day.$i.'1'];

		}elseif ($_POST['lesson'.$day.$i.'0']=='Англ. мов.#1')
			$less[$i - 1] = 'Англ. мов.#1<^>Англ. мов.#2';
		elseif ($_POST['lesson'.$day.$i.'0']=='Інформ#1')
			$less[$i - 1] = 'Інформ#1<^>Інформ#2';
		elseif ($_POST['lesson'.$day.$i.'0']=='Іспанська')
			$less[$i - 1] = 'Іспанська<^>Німецька';
		else
			$less[$i - 1] = $_POST['lesson'.$day.$i.'0'];
	}
	$result = mysqli_query($sql, "UPDATE `homework` SET `1` = '$arr[0]', `2` = '$arr[1]', `3` = '$arr[2]', `4` = '$arr[3]', `5` = '$arr[4]', `6` = '$arr[5]', `7` = '$arr[6]', `8` = '$arr[7]' WHERE id='".$day."'");
	mysqli_free_result($result);

	$result = mysqli_query($sql, "UPDATE `timetable` SET `1` = '$less[0]', `2` = '$less[1]', `3` = '$less[2]', `4` = '$less[3]', `5` = '$less[4]', `6` = '$less[5]', `7` = '$less[6]', `8` = '$less[7]' WHERE id='".$day."'");
	mysqli_free_result($result);
}
header('Location: http://sch17.pp.ua/admin/rozklad.php'); 
exit();
?>