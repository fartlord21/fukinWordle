<!-- $_GET is going to be useful once the diff and username is set, get wil be used to play w the arrays variables for the game -->
<?php include "db.php"; ?>
<?php include "functions.php"; ?>

<?php include "includes/headerStartDifficulty.php"; ?>

<div class="container">
  <div>
   <h1>Select Your Difficulty</h1>
   <br>
    <form action="startDifficulty.php" method="post">
      <div class= "form-group">
        <!--<label for="difficulty">Difficulty</label>-->
        <select name= "difficulty" id= "">
          <?php
          displaysDifficultyChoices();
          ?>
        </select>
      </div>
    </form>
      <br>
      <a href="startDifficulty.php?choices=<?php echo $difficulty; ?>">Select This Difficulty</a>
     <input type="submit" name="submit" class="btn btn-primary" value="Select This Difficulty">
   <?php selectsDifficulty(); ?>
   <a href="startUsername.php">username</a>
 </div>
<?php include "includes/footerStart.php"; ?>