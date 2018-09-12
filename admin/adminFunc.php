<?

include "../mysql.php";

function textAreaNews($nameNews) {
	$result = mysqli_query($GLOBALS['sql'], "SELECT text from news where name='".$nameNews."'");
	$row = mysqli_fetch_row($result);
	echo $row[0];
	mysqli_free_result($result);
}

function selectNews($nameNews) {
	$result = mysqli_query($GLOBALS['sql'], "SELECT name from news");
	echo '<option onClick="blurt(this); getValue(this);" value="1">Нова новина</option>';
	while ( $row = mysqli_fetch_row($result) ){
		if ($nameNews == $row[0]) echo '<option onClick="blurt(this); getValue(this);" selected>'.$row[0].'</option>';
		else echo '<option onClick="blurt(this); getValue(this);">'.$row[0].'</option>';
	}
	mysqli_free_result($result);
}

function selectDayOrMonth($dayOrMonth, $nameNews) {
	$result = mysqli_query($GLOBALS['sql'], "SELECT * from news WHERE name='".$nameNews."'");
	$date = explode('-', mysqli_fetch_row($result));
	mysqli_free_result($result);

	switch ($dayOrMonth) {
		case 'day':
			for ($i=1;$i <= 31;$i++) { 
				if ($date[2] == $i) {
					echo "<option onClick='blurt(this)' selected>".$i."</option>";
				} else {
					echo "<option onClick='blurt(this)'>".$i."</option>";
				}
			}
			break;
		case 'month':
			$month = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
			for ($i=1;$i <= 12;$i++) { 
				if ($date[1] == $i) {
					echo "<option onClick='blurt(this)' selected>".$month[$i-1]."</option>";
				} else {
					echo "<option onClick='blurt(this)'>".$month[$i-1]."</option>";
				}
			}
			break;
	}
}

function timetable($day) {
	if ($day == 1) {
		$startingDay = 1;
		$endingDay=3;
	} else {
		$startingDay=4;
		$endingDay=5;
	}
	for ($currentDay = $startingDay; $currentDay <= $endingDay; $currentDay++) {
		echo "<div class='table'><table>";
		$result = mysqli_query($GLOBALS['sql'], "SELECT * FROM `timetable` where id=$currentDay");
		$lesson = mysqli_fetch_row($result);
		mysqli_free_result($result);

		$result = mysqli_query($GLOBALS['sql'], "SELECT * FROM `homework` WHERE id=$currentDay");
		$homework = mysqli_fetch_row($result);
		mysqli_free_result($result);

		for ($i = 0; $i <= 8; $i++) {
			if ($i == 8) $css = ['nl', 'bl', 'cl'];
			else $css = [' ', ' ', ' '];
			if ($i == 0) echo "<tr><td class='date' colspan='3'>".$homework[1]."</td></tr>";
			else {
				$less[0] = less(explode("<^>", $lesson[$i + 1])[0], $currentDay, $i);
				$homeworkCheck[0] = "<input type='text' name='".$currentDay.$i."' class='homework' value='".explode("<^>", $homework[$i + 1])[0]."'>";
				echo "<tr>
					<td class='".$css[0]." n'>$i.</td>
					<td class='".$css[1]." b'>$less[0]</td>
					<td class='".$css[2]." c'>$homeworkCheck[0]</td>
				</tr>";
				if (count($less) == 2) {
					$less[1] = less(explode("<^>", $lesson[$i + 1])[1], $currentDay, $i, 1);
					$homeworkCheck[1] = "<input type='text' name='".$currentDay.$i."1' class='homework' value='".explode("<^>", $homework[$i + 1])[1]."'>";
					echo "<tr>
						<td class='".$css[0]." n'></td>
						<td class='".$css[1]." b'>$less[1]</td>
						<td class='".$css[2]." c'>$homeworkCheck[1]</td>
					</tr>";
				}
			}
		}
		echo "</table></div>";
	}
}

function less($lesson, $day, $i, $secondGroup=0) {
	$str = "<div class='form_sel'><select name='lesson".$day.$i.$secondGroup."' class='select'>";

	$result = mysqli_query($GLOBALS['sql'], "SELECT name from lessons order by name");
	while($row = mysqli_fetch_row($result)) {
		$row = explode("<^>", $row[0]);

		if (count($row) == 2) $b = $secondGroup;
		else $b = 0;

		if ($lesson == $row[$secondGroup]) $str .= '<option onClick="blurt(this)" selected>'.$row[$b].'</option>';
		else $str .= '<option onClick="blurt(this)">'.$row[$b].'</option>';
	}
	$str .= "</select></div>";
	return $str;
}
?>