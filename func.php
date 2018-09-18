<?

include "mysql.php";

function news() {
	$result = mysqli_query($GLOBALS['sql'], "SELECT * from news ORDER BY -ID");
	$i = 0;
	while($row = mysqli_fetch_row($result)) {
		$date = implode( '.', array_reverse( explode('-', $row[2] ) ) );
		$news[$i] = [$row[1], $date, $row[3]]; 
		$i++;
	}
	mysqli_free_result($result);
	return $news;
}

function timetable($currentDay) {
	$result = mysqli_query($GLOBALS['sql'], "SELECT * FROM `timetable` where id=$currentDay");
	$lesson = mysqli_fetch_row($result);
	mysqli_free_result($result);
	$result = mysqli_query($GLOBALS['sql'], "SELECT * FROM `homework` WHERE id=$currentDay");
	$homework = mysqli_fetch_row($result);
	mysqli_free_result($result);
	$timetable[0] = $lesson[1];
	for ($i = 1; $i <= 8; $i++) {
		$less = explode("<^>", $lesson[$i + 1]);
		$homeworkCheck = explode("<^>", $homework[$i + 1]);
		$timetable[$i][0] = $less[0];
		$timetable[$i][1] = $homeworkCheck[0];
		$timetable[$i][2] = $less[1];
		$timetable[$i][3] = $homeworkCheck[1];
	}
	return $timetable;
}

function onduty() {
	$date = date('Y-m-d');
	$result = mysqli_query($GLOBALS['sql'], "SELECT * from regular order by date");
	$i = [false, false, false, false];
	while ($row = mysqli_fetch_row($result)){
		if ($i[0] == false){
			$firstname = $row[1];
			$i[0] = true;
		}elseif ($i[1] == false){
			$secondname = $row[1];
			$i[1] = true;
		}

		if ($i[2] == false and $date == $row[2]) {
			$i[2] = true;
			$name = $row[1];
		}elseif ($i[3] == false and $date == $row[2]) {
			$i[3] = true;
			$sname = $row[1];
		break;
		}
	}

	mysqli_free_result($result);
	if ($i[2] == true and $i[3] == true) {
		echo $name."1".$sname;
	}else{
		$result = mysqli_query($GLOBALS['sql'], "UPDATE `regular` SET `date` = '$date' WHERE name='$firstname'");
		mysqli_free_result($result);
		$result = mysqli_query($GLOBALS['sql'], "UPDATE `regular` SET `date` = '$date' WHERE name='$secondname'");
		mysqli_free_result($result);
		echo $firstname."2".$secondname;
	}
}
?>