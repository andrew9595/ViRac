<?php
	$pedestrians = $_GET['pedestrians'];
	$vehicles = $_GET['vehicles'];
	$environment = $_GET['environment'];

	$thisArray = array();
	$thisArray['pedestrians'] = $pedestrians;
	$thisArray['vehicles'] = $vehicles;
	$thisArray['environment'] = $environment;

	echo json_encode($thisArray);

	$myfile = fopen("environment.json", "w") or die("Unable to open file!");
	fwrite($myfile, json_encode($thisArray));
	// fwrite($myfile, $thisArray);
	fclose($myfile);
?>
