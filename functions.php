<?php 

function displaysDifficultyChoices() {
  global $connection;

  $query = "SELECT * FROM difficultyChoices";

  $result = mysqli_query($connection,$query);

  if(!$result) {
    die ('query was a failure ma boi.');
  }
  else {
    while($difficulty=mysqli_fetch_assoc($result)) {
      $choices=$difficulty['choices'];
      echo "<option>$choices</option>";
    }
  }
}

//some combination of these two makes function selectsDifficulty
function selectsDifficulty() {
  if(isset($_POST['submit'])) {
    global $connection;

    $difficulty= $_POST['difficulty'];

    if(!$difficulty) {
      die ('failure to select difficulty' . mysqli_error($connection));
    }
    else {
      print_r($_GET);
      echo "<br>let's set a ";
    }
  /* function returnsDataForUpdating() {//no condiitinal for running bc we want it to load as the page loads so the user can pick from a list. 
global $connection;//this can be done instead of $connection=$_POST["$blahBLah"]; you would usually do, this is the way to do it with variables created in other files. these files have to be included though

$query = "SELECT * FROM users";

$result = mysqli_query($connection,$query);

if(!$result) {
  die ('query was a failure ma boi.');
  }
else {
  while($row=mysqli_fetch_assoc($result)) { //we want to see the row relating to the result
    $id=$row['id'];//this plus the fact that row is used in the parameter for the while loop, allows us to basically cycle through all the id's i the database we are accessing
  
    echo "<option value='$id'>$id</option>";
  }
 }
}

function readsData() { 
global $connection;

$query="SELECT * FROM users";

$result=mysqli_query($connection,$query);

if(!$result) {
  die ('query was a failure ma boi.');
  }
while($row=mysqli_fetch_assoc($result)) {//can use ysqli_fetch_row or mysqli_fetch_assoc whatver fits best  
  print_r($row);
  }
}
*/
 }
}
?>