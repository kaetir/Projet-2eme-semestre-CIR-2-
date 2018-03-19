<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL);

function swap(&$tab,$i1, $i2){
	$tmp = $tab[$i2];
	$tab[$i2] = $tab[$i1];
	$tab[$i1] = $tmp;
}

function sortDir(&$tab)
{
	$firstDir = 2;
	foreach ($tab as $key => $elmt) {
		if(is_dir( $elmt) && $key >1) {
			swap($tab, $firstDir, $key);
			$firstDir++;
		}
	}
}

?>
<!DOCTYPE html>
<html>

<head>
	<title>Images</title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> 
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<style type="text/css">
	img{
		height: 200px;
		width: 200px;
		border: 1px solid black; 
	}
	a{
		height: 200px;
		width: 200px;	
	}

</style>
</head>

<body class="w3-container w3-padding">
	<div class="w3-container w3-card">

		<?php 
		$dir = scandir(".");
		sortDir($dir);
		foreach ($dir as $file){
			if($file != "." && $file[0] != "." && $file != "index.php" && $file != "fonts"){
				dir:
				if(is_dir($file) && $file[0] != "."){
					echo "<div class='w3-container w3-card w3-margin w3-padding'> <a href='$file'>$file </a> <hr> ";

					$tmpDir = scandir($file);
					foreach ($tmpDir as $image) {
						if(is_dir($image)){
							if($image[0] != "."){
								$file += $image;
								goto dir; //MDR J4AI MIS UN GOTO ZCJSDFQJZFAZIRFZ
							}	
						}
						else{
							echo "<a href='$file/$image'><img class='w3-img' src='$file/$image' alt='$image'></a>";
						}
					}
					echo "</div>";

				}else{
					echo "<a href='$file'><img class='w3-img' src='$file' alt='$image'> </a>";
				}
			}
			else if($file == "fonts"){
				echo "<div class='w3-container w3-card w3-margin w3-padding'> <a href='$file'>$file </a> </div> ";
			}
		}
		?>

	</div>
</body>
</html>