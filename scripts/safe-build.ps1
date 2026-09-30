$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

$projectRoot = Split-Path -Parent $PSScriptRoot
$distDirName = if ($env:NEXT_DIST_DIR) { $env:NEXT_DIST_DIR } else { '.next-build' }
$nextDir = Join-Path $projectRoot $distDirName
$standaloneDir = Join-Path $nextDir 'standalone'
$staticDir = Join-Path $nextDir 'static'
$publicDir = Join-Path $projectRoot 'public'
$deployDir = Join-Path $projectRoot 'deploy'
$tempDeployDir = Join-Path $projectRoot 'deploy-temp'
$backupDir = Join-Path $projectRoot ("deploy-backup-" + (Get-Date -Format 'yyyyMMdd-HHmmss'))
$webConfigFile = Join-Path $projectRoot 'web.config'
$nextCli = Join-Path $projectRoot 'node_modules\next\dist\bin\next'

function Remove-DirectoryIfExists {
  param([string]$Path)

  if (Test-Path -LiteralPath $Path) {
    Remove-Item -LiteralPath $Path -Recurse -Force
  }
}

function Copy-Directory {
  param(
    [string]$Source,
    [string]$Destination
  )

  New-Item -ItemType Directory -Path $Destination -Force | Out-Null

  $null = & robocopy $Source $Destination /E /NFL /NDL /NJH /NJS /NP
  if ($LASTEXITCODE -gt 7) {
    throw "robocopy failed while copying '$Source' to '$Destination' with exit code $LASTEXITCODE."
  }
}

function Copy-FileIfExists {
  param(
    [string]$Source,
    [string]$Destination
  )

  if (Test-Path -LiteralPath $Source) {
    Copy-Item -LiteralPath $Source -Destination $Destination -Force
  }
}

try {
  Write-Host 'Building Next.js app...'
  $env:NEXT_DIST_DIR = $distDirName
  & node $nextCli build
  if ($LASTEXITCODE -ne 0) {
    throw "Next.js build failed with exit code $LASTEXITCODE."
  }

  if (-not (Test-Path -LiteralPath $standaloneDir)) {
    throw "Standalone output was not generated at '$standaloneDir'."
  }

  Remove-DirectoryIfExists $tempDeployDir
  New-Item -ItemType Directory -Path $tempDeployDir | Out-Null

  Write-Host 'Copying standalone server bundle...'
  Copy-Directory $standaloneDir $tempDeployDir

  if (Test-Path -LiteralPath $staticDir) {
    $tempNextDir = Join-Path $tempDeployDir '.next'
    Write-Host 'Copying Next static assets...'
    Copy-Directory $staticDir (Join-Path $tempNextDir 'static')
  }

  if (Test-Path -LiteralPath $publicDir) {
    Write-Host 'Copying public assets...'
    Copy-Directory $publicDir (Join-Path $tempDeployDir 'public')
  }

  if (Test-Path -LiteralPath $webConfigFile) {
    Write-Host 'Copying IIS web.config...'
    Copy-FileIfExists $webConfigFile (Join-Path $tempDeployDir 'web.config')
  }

  if (Test-Path -LiteralPath $deployDir) {
    Write-Host "Backing up current deploy folder to '$backupDir'..."
    Move-Item -LiteralPath $deployDir -Destination $backupDir
  }

  Write-Host 'Promoting fresh deploy build...'
  Move-Item -LiteralPath $tempDeployDir -Destination $deployDir

  Write-Host "Safe build completed successfully. Deploy output: '$deployDir'"
  if (Test-Path -LiteralPath $backupDir) {
    Write-Host "Previous deploy backup: '$backupDir'"
  }
}
catch {
  Remove-DirectoryIfExists $tempDeployDir
  throw
}
