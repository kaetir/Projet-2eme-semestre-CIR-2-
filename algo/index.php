 <?php
 include 'fonction.php'
 ?>


 <!DOCTYPE html>
 <html>
 <head>
 	<title>index</title>
 	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> 
 	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
 	<style type="text/css">
 	ul{
 		list-style-type: none;
 	}
 	a{
 		text-decoration: none;
 	}
 </style>
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
	<div class="w3-container w3-margin-top " >
		<?php 
		include "README.html";
		?>
	</div>
	<div class="w3-container w3-margin-top " >
		<ul class="w3-container w3-ul w3-card">
			<?php 
			$dir = scandir(".");
			sortDir($dir);
			foreach ($dir as $file){
				if($file != "." && $file[0] != "."){
					echo "<li> <a href='".$file."'>" ;
 					//on affiche les icones 
					showTheIcon($file);
					echo $file."</a></li>";
				}
			}
			?>
		</ul>
	</div>


</body>
</html>