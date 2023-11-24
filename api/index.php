<?php
@include_once('app/HttpStatus.php');
@include_once('app/apifunctions.php');

$cmd = '';

if(isset($_GET['cmd']) ) {
    $cmd = strtolower($_GET['cmd']);
}

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    createActivities();
    die();
}

if($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    deleteActivity();
    die();
}

if($_SERVER['REQUEST_METHOD'] == 'PATCH') {
    activityDone();
    die();
}

switch($cmd) {
    case 'all':
        getAllActivities();
        break;

    case 'get':
        getSingleActivity();
        break;
}

