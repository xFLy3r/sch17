<?
include "../func.php";

$content = $_GET['content'];

switch ($content){
	
	case "index":
		echo "<div class='news'>
			<h1 class='news'>ОНО ЖИВОЕ</h1>
			<p class='date'>РАБОТАЕТ</p>
			<div class='news_text'>
				<p>НИФИГАСЕ</p>
			</div>
			<div class='break'></div>
			</div>";
		break;

	case "timetable":
		timetableView();
		break;
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
?>