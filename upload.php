<?php
header("Content-Type: application/json");

if(!isset($_FILES['photo'])){
  echo json_encode(["error"=>"No file"]);
  exit;
}

$dir = __DIR__."/uploads/staffs/";
if(!is_dir($dir)) mkdir($dir,0755,true);

$tmp=$_FILES['photo']['tmp_name'];
$img=imagecreatefromstring(file_get_contents($tmp));

$w=imagesx($img); $h=imagesy($img);
$max=600;
$nw=$w>$h?$max:intval($w*$max/$h);
$nh=$h>$w?$max:intval($h*$max/$w);

$dst=imagecreatetruecolor($nw,$nh);
imagecopyresampled($dst,$img,0,0,0,0,$nw,$nh,$w,$h);

$name="staff_".time()."_".rand(100,999).".jpg";
imagejpeg($dst,$dir.$name,70);

imagedestroy($img); imagedestroy($dst);

echo json_encode([
  "success"=>true,
  "path"=>"uploads/staffs/".$name
]);
