$path = "D:\workfile\codex\project\project01_updatemywesite\project_001_个人作品集网站_v1.0\src\components\Projects.jsx"
$lines = [System.IO.File]::ReadAllLines($path)
$lastIdx = $lines.Count - 1

# Fix 1: id=1 回退 row 'span 2' → '1'
$lines[14] = $lines[14] -replace "row: 'span 2',", "row: '1',"

# Fix 2: id=7 回退 row '4' → '2'
$lines[91] = $lines[91] -replace "row: '4',", "row: '2',"

# Fix 3: id=8 回退 row '4' → '2'
$lines[104] = $lines[104] -replace "row: '4',", "row: '2',"

# Fix 4: Desktop CSS grid-auto-rows → grid-template-rows (array index 279 = L280)
$lines[279] = $lines[279] -replace "grid-auto-rows: 317px;", "grid-template-rows: 658px repeat(2, 317px);"

# Fix 5: Tablet CSS (L481-489) 加 grid-template-rows,让 tablet Apple TVC 自适应
# 在 L483 (array index 482) 后插入新行
$head = $lines[0..482]
$tail = $lines[483..$lastIdx]
$lines = $head + @("            grid-template-rows: auto repeat(4, 317px);") + $tail

[System.IO.File]::WriteAllLines($path, $lines, (New-Object System.Text.UTF8Encoding $false))
Write-Host "Done. 5 fixes applied:"
Write-Host "  L15 (id=1): $($lines[14])"
Write-Host "  L92 (id=7): $($lines[91])"
Write-Host "  L105 (id=8): $($lines[104])"
Write-Host "  L280 (desktop CSS): $($lines[279])"
Write-Host "  L484 (tablet CSS): grid-template-rows: auto repeat(4, 317px)"
