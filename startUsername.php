<?php include "db.php"; ?>
<?php include "functions.php"; ?>
<?php include "includes/headerStart.php"; ?>

<div class="container">
  <h1>Enter Your Username</h1>
  <br>
  <form action="startUsername.php" method="post">
    <div class="formGroup">
      <label for="difficulty">Enter Your Username</label>
      <select name="difficulty" id="">
        <?php displaysDifficultyChoices();
        ?>
      </select>
    </div>
  </form>
  <br>
  <!--<a href="startDifficulty.php?choices=""; ">Select This Difficulty</a>-->
  <input type="submit" name="submit" value="username">
  <?php selectsDifficulty(); ?>
  <br>
  <p>
    retreat to
    <a href="startDifficulty.php">difficulty</a>
  </p>
</div>

<?php include "includes/footerStart.php"; ?>