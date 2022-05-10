<?php include "db.php"; ?>
<?php include "functions.php"; ?>
<?php include "includes/headerStart.php"; ?>

<div class="container">
  <div>
    <h1>Select Your Difficulty</h1>
    <br>
    <form action="startDifficulty.html" method="post">
      <div class="form-group">
        <label for="difficulty">Difficulty</label>
        <select name="difficulty" id="">
          <?php displaysDifficultyChoices();
          ?>
        </select>
      </div>
    </form>
    <br>
    <!--<a href="startDifficulty.php?choices=""; ">Select This Difficulty</a>-->
    <input type="submit" name="submit" value="Confirm">
    <?php selectsDifficulty(); ?>
    <br>
    <?php $phraseUsername1 = "create a <strong>username</strong>," ?>
    link to a page that displays these options after clicking
    <p> <a href="startUsername.php"><?php echo $phraseUsername1 ?></a>
      or retrieve
      <?php $phraseUsername2 = "an <strong>old one</strong>" ?>
      <a href="playGame.php"><?php echo $phraseUsername2 ?></a>
    </p>
  </div>

  <?php include "includes/footerStart.php"; ?>