<?php

$array = $fields = array(); $i = 0;
$handle = fopen("BRN2015_RANKING_40_AND_MORE-cleaned.csv", "r");
if ($handle) {
    while (($row = fgetcsv($handle, 4096)) !== false) {
        if (empty($fields)) {
            $fields = $row;
            continue;
        }
        foreach ($row as $k=>$value) {
            $array[$i][$fields[$k]] = $value;
        }
        $i++;
    }
    if (!feof($handle)) {
        echo "Error: unexpected fgets() fail\n";
    }
    fclose($handle);
}
echo json_encode($array, JSON_PRETTY_PRINT|JSON_NUMERIC_CHECK);
?>
