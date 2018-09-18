<?

include "mysql.php";

function news() {
	$result = mysqli_query($GLOBALS['sql'], "SELECT * from news ORDER BY -ID");
	echo $host;
	while($row = mysqli_fetch_row($result)) {
		$date = implode( '.', array_reverse( explode('-', $row[2] ) ) );
		echo "<div class='news'>
				<h1 class='news'>$row[1]</h1>
				<p class='date'>$date</p>
				<div class='news_text'>
					<p>$row[3]</p>
				</div>
				<div class='break'></div>
			</div>";
	}
	mysqli_free_result($result);
}

/*function homework($day, $id, $t=1){
	$id = $id + 2;
	$result = mysqli_query($GLOBALS['sql'], "SELECT * FROM `homework` WHERE id=$day");
	$row = mysqli_fetch_row($result);
	mysqli_free_result($result);
	switch ($t) {
		case 1:
			echo $row[$id];
			break;
		
		case 2;
			return $row[$id];
			break;
	}		
}*/

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
			if ($i == 0) echo "<tr><td class='date' colspan='3'>$lesson[1]</td></tr>";
			else {
				$less = explode("<^>", $lesson[$i + 1]);
				$homeworkCheck = explode("<^>", $homework[$i + 1]);
				echo "<tr>
					<td class='".$css[0]." n'>$i.</td>
					<td class='".$css[1]." b'>$less[0]</td>
					<td class='".$css[2]." c'>$homeworkCheck[0]</td>
				</tr>";
				if (count($less) == 2) {
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

function teachs() {
	$result = mysqli_query($GLOBALS['sql'], "SELECT * from teachers order by tech");
	while ($row = mysqli_fetch_row($result)) {			
		echo "<div class='tdiv'>
				<h3 class='tname' style='margin: 2%;'>
					".$row[1]."
				</h3>
				<div class='to' style='margin: 2%;'>
					".$row[2]."
				</div>
			</div>";
	}
}

function books(){
	$result = mysqli_query($GLOBALS['sql'], "SELECT * from books order by name");
	while($row = mysqli_fetch_row($result)){
		echo "<div class='tdiv'>
			<img src='".$row[2]."' class='img'>
			<h3 class='tname'>
				".$row[1]."
			</h3>
			<a class='download' href='".$row[3]."'>Завантажити</a>
			<div style='height: 15px;'></div>
		</div>";
	}
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
