<?php

	include './../../db.php';
	include './../../filter.php';
	include './../../common.php';
	//
	session_start();
	switch_game_data_base($_SESSION['language']);
	//
	$args =  isset($_GET['a']) ? $_GET['a'] : "";
	$flags = isset($_GET['f']) ? $_GET['f'] : "";
	$order = isset($_GET['o']) ? $_GET['o'] : "";
	$page = isset($_GET['p']) ? (int)$_GET['p'] : 1;
	//
	echo json_encode(get_profiles($args,$flags,$order,$page));
	
	
?>