

$arr = 0,1,5,10,3,12,19
$i = 1
$end = 30000000
$hash = @{}

$arr | Select-Object | Select-Object -SkipLast 1 | ForEach-Object { $hash.Add($_, $i++) }


$n = $arr[$arr.Length-1]
$i ++

while ($i -le $end) {
    if(!$hash.ContainsKey($n)) {
        $hash[$n] = $i-1
        $n = 0
    } else {
        $diff = $i - 1 - $hash[$n]
        $hash[$n] = $i-1
        $n = $diff
    }
    $i ++
    if($i%5000000 -eq 0) {
        Write-Host "tick ${i}"
    }
}

Write-Host "DONE => ${n}"