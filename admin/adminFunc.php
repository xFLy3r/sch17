<?

include "../mysql.php";

function textareaNews($nameNews) {
	$result = mysqli_query($GLOBALS['sql'], "SELECT text from news where name='".$nameNews."'");
	$row = mysqli_fetch_row($result);
	mysqli_free_result($result);
	return $row[0];
}

function selectNews($nameNews) {
	$result = mysqli_query($GLOBALS['sql'], "SELECT name from news");
	$string = '<option onClick="blurt(this); getValue(this);" value="1">Нова новина</option>';
	while ( $row = mysqli_fetch_row($result) ){
		if ($nameNews == $row[0]) $string .= '<option onClick="blurt(this); getValue(this);" selected>'.$row[0].'</option>';
		else $string .= '<option onClick="blurt(this); getValue(this);">'.$row[0].'</option>';
	}
	mysqli_free_result($result);
	return $string;
}

function selectDay($nameNews) {
	$result = mysqli_query($GLOBALS['sql'], "SELECT * from news WHERE name='".$nameNews."'");
	$date = explode('-', mysqli_fetch_row($result));
	mysqli_free_result($result);

	$string = "";

	for ($i=1;$i <= 31; $i++) { 
		if ($date[2] == $i) {
			$string .= "<option onClick='blurt(this)' selected>".$i."</option>";
		} else {
			$string .= "<option onClick='blurt(this)'>".$i."</option>";
		}
	}
	return $string;
}

function selectMonth($nameNews) {
	$result = mysqli_query($GLOBALS['sql'], "SELECT * from news WHERE name='".$nameNews."'");
	$date = explode('-', mysqli_fetch_row($result));
	mysqli_free_result($result);

	$string = "";

	$month = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
	for ($i=1;$i <= 12; $i++) { 
		if ($date[1] == $i) {
			$string .= "<option onClick='blurt(this)' selected>".$month[$i-1]."</option>";
		} else {
			$string .= "<option onClick='blurt(this)'>".$month[$i-1]."</option>";
		}
	}
	return $string;
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
		$homeworkCheck = explode("<^>", $homework[$i + 1]);
		$timetable[$i][0] = less( explode("<^>", $lesson[$i + 1])[0], $currentDay, $i, 0 );
		$timetable[$i][1] = $homeworkCheck[0];
		$timetable[$i][2] = less( explode("<^>", $lesson[$i + 1])[1], $currentDay, $i, 1 );
		$timetable[$i][3] = $homeworkCheck[1];
	}
	return $timetable;
}

function less($lesson, $currentDay, $i, $c) {
	$str = "<div class='form_sel'><select name='lesson".$currentDay.$i.$c."' class='select'>";

	$result = mysqli_query($GLOBALS['sql'], "SELECT name from lessons order by name");
	while( $row = mysqli_fetch_row($result) ) {
		$row = explode("<^>", $row[0]);
		if ($lesson == $row[$c])
			$str .= '<option onClick="blurt(this)" selected>'.$row[$c].'</option>';
		else
			$str .= '<option onClick="blurt(this)">'.$row[$c].'</option>';
	}
	$str .= "</select></div>";
	return $str;
}
?>