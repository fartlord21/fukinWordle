<!-- $_GET is going to be useful once the diff and username is set, get wil be used to play w the arrays variables for the game -->
<?php include "db.php"; ?>
<?php include "functions.php"; ?>

<?php include "includes/headerStartDifficulty.php"; ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="style.css" rel="stylesheet" />
  <title>Difficulty</title>
</head>
<body>
  <div class="container">
  <div>
    <h1>Select Your Difficulty</h1>
    <br>
    <form action="startDifficulty.php" method="post">
      <div class="form-group">
        <!--<label for="difficulty">Difficulty</label>-->
        <select name="difficulty" id="">
          <?php
          displaysDifficultyChoices();
          ?>
        </select>
      </div>
    </form>
    <br>
    <!--<a href="startDifficulty.php?choices=<?php echo $difficulty; ?>">Select This Difficulty</a>-->
    <input type="submit" name="submit" class="btn btn-primary" value="Select This Difficulty">
    <?php selectsDifficulty(); ?>
    <br>
    <a href="startUsername.php">make a username</a>
  </div>
</body>
</html>
  <?php include "includes/footerStart.php"; ?>