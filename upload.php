<?php
header("Content-Type: application/json");

if (!isset($_FILES['photo'])) {
  echo json_encode(["error" => "No file"]);
  exit;
}

$dir = __DIR__ . "/uploads/staffs/";
if (!is_dir($dir)) {
  mkdir($dir, 0755, true);
}

$tmp = $_FILES['photo']['tmp_name'];
if (!$tmp) {
  echo json_encode(["error" => "Upload failed"]);
  exit;
}

$ext = strtolower(pathinfo($_FILES['photo']['name'], PATHINFO_EXTENSION));
if (!in_array($ext, ["jpg", "jpeg", "png", "webp"])) {
  echo json_encode(["error" => "Invalid format"]);
  exit;
}

$name = "staff_" . time() . "_" . rand(100,999) . ".jpg";
$path = $dir . $name;

/* === Image resize & compress === */
$src = imagecreatefromstring(file_get_contents($tmp));
$w = imagesx($src);
$h = imagesy($src);

$max = 600;
$nw = $w > $h ? $max : intval($w * $max / $h);
$nh = $h > $w ? $max : intval($h * $max / $w);

$dst = imagecreatetruecolor($nw, $nh);
imagecopyresampled($dst, $src, 0,0,0,0, $nw,$nh,$w,$h);
imagejpeg($dst, $path, 70);

imagedestroy($src);
imagedestroy($dst);

echo json_encode([
  "success" => true,
  "path" => "uploads/staffs/".$name
]);
