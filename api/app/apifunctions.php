<?php

@include_once('app/HttpStatus.php');
@include_once('Database.php');

function getAllActivities()
{
   $sql = "SELECT * FROM `activities`";
   Database::query($sql);
   $rows = Database::getAll();

   header('Content-Type: application/json');
   echo json_encode($rows);
}

function getSingleActivity()
{
   if(isset($_GET['id'])) {
      $activityId = $_GET['id'];
      getActivity($activityId);
   } else {
      echo "bro forgot the id";
   }
}

function getActivity($activityId) {
   // Sanitize the input to prevent SQL injection
   $activityId = intval($activityId);

   // Check if the ID is valid
   if ($activityId <= 0) {
      echo "Invalid activity ID.";
      return;
   }

   // Query to retrieve the specific activity
   $sql = "SELECT * FROM `activities` WHERE `id` = :id";

   // Using your Database class to execute the query
   Database::query($sql, [':id' => $activityId]);

   // Retrieving the single row
   $activity = Database::get();

   // Check if the activity was found
   if ($activity) {
      header('Content-Type: application/json');
      echo json_encode($activity);
   } else {
      echo "bro this ain't an activity yet go put in a lower number or sum else than " . $activityId;
   }
}

function createActivities() {
   $task = $_POST['task'];
   $created_at = $_POST['created_at'];

   // Check if the task is at least 3 characters long
   if (strlen($task) < 3) {
      // Handle the error or provide feedback to the user
      echo "Task must be at least 3 characters long.";
      return;
   }

   // Perform the insertion
   $sql = "INSERT INTO `activities` (`task`, `created_at`) VALUES ('$task', '$created_at')";
   Database::query($sql);
}

function editActivities()
{

   

}

function deleteActivity()
{
   $id = $_GET['id'];
   $sql = "DELETE FROM `activities` WHERE `activities`.`id` = $id";
   Database::query($sql);
}

function activityDone()
{
   $id = $_GET['id'];

   // Determine whether to set finished_at to the current date or null
   $enddate = date("Y-m-d");
   $finishedAtValue = "CASE WHEN `done` = 1 THEN '$enddate' ELSE NULL END";

   // Update the 'done' value and 'finished_at' using a CASE statement
   $sql = "UPDATE `activities` SET `done` = CASE WHEN `done` = 1 THEN 0 ELSE 1 END, `finished_at` = $finishedAtValue WHERE `id` = $id";
   Database::query($sql);
}
