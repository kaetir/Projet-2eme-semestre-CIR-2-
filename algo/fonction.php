<?php



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

function showTheIcon($file)
{
    if(is_dir($file)){
    //on affiche les icones des dossier 
        switch ($file) {
            case '..':
            echo "<i class='fa fa-arrow-left'></i>&nbsp;&nbsp;";
            break;

            default:
            echo "<i class='fa fa-folder-o'></i>&nbsp;&nbsp;";
            break;
        }
    }else{
    //on affiche les icones des fichiers
        switch (substr($file, -3)) {
            case 'zip':
            echo "<i class='fa fa-file-archive-o'></i>&nbsp;&nbsp;";
            break;
            case 'pdf':
            echo "<i class='fa fa-file-pdf-o'></i>&nbsp;&nbsp;";
            break;
            case 'tml':
            echo "<i class='fa fa-window-maximize'></i>&nbsp;&nbsp;";
            break;
            case 'htm':
            echo "<i class='fa fa-window-maximize'></i>&nbsp;&nbsp;";
            break;
            case 'css':
            echo "<i class='fa fa-file-code-o'></i>&nbsp;&nbsp;";
            break;
            case 'php':
            echo "<i class='fa fa-file-code-o'></i>&nbsp;&nbsp;";
            break;
            case 'png':
            echo "<i class='fa fa-file-image-o'></i>&nbsp;&nbsp;";
            break;
            case 'jpg':
            echo "<i class='fa fa-file-image-o'></i>&nbsp;&nbsp;";
            break;

            default:
            echo "<i class='fa fa-file'></i>&nbsp;&nbsp;";
            break;
        }
    }
}

