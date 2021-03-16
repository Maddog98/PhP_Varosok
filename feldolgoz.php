<?php

require './kapcsolat.php';

$mySql = new kapcsolat();

$varosAb = array();
$result = $mySql->lekerdez("varosok");

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {

        $varosAb[] = $row;
    }
    echo json_encode($varosAb);
} else {
    echo "0 results";
}
