<?

include "func.php";

function content ($page) {
	switch ($page) {
		case "index":
			echo "<div style='height: 1px;'></div>";
			indexView();
			echo "<div style='height: 1px;'></div>";
		break;

		case "timetable":
			timetableView();
		break;

		case "teachers":
			teachersView();
		break;

		case "books":
			booksView();
		break;
	}
}

function indexView() {
	$news = news();
	$i = 0;
	while (isset($news[$i])) {
		echo "<div class='news'>
			<h1 class='news'>".$news[$i][0]."</h1>
			<p class='date'>".$news[$i][1]."</p>
			<div class='news_text'>
				<p>".$news[$i][2]."</p>
			</div>
			<div class='break'></div>
			</div>";
		$i++;
	}
}

function timetableView() {
	echo "<div id='ltable'>";
	for ($day = 1; $day <= 5; $day++){
		$timetable = timetable($day);
		echo "<div class='table'><table>";
		echo "<tr><td class='date' colspan='3'>".$timetable[0]."</td></tr>";
		for ($i = 1; $i <= 8; $i++) {
			if ($i == 8) $css = ['nl', 'bl', 'cl'];
			else $css = [' ', ' ', ' '];
			echo "<tr>
				<td class='".$css[0]." n'>".$i.".</td>
				<td class='".$css[1]." b'>".$timetable[$i][0]."</td>
				<td class='".$css[2]." c'>".$timetable[$i][1]."</td>
			</tr>";

			if (isset($timtable[4])) {
				echo "<tr>
					<td class='".$css[0]." n'></td>
					<td class='".$css[1]." b'>".$timetable[$i][2]."</td>
					<td class='".$css[2]." c'>".$timetable[$i][3]."</td>
				</tr>";
			}
		}
		echo "</table></div>";
		if ($day == 3) echo "</div><div id='rtable'>";
		elseif ($day == 5) echo "</div>";
	}
}

function teachersView() {
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
	mysqli_free_result($result);
}

function booksView() {
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
	mysqli_free_result($result);
}
?>