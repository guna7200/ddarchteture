<?php
// Secret token for automatic deployment
$secret = 'archidee_deploy_2026_key';

$providedSecret = $_REQUEST['secret'] ?? '';

if ($providedSecret !== $secret) {
    http_response_code(403);
    die('Forbidden: Invalid secret key');
}

// Direct raw GitHub URL for live_dist.zip
$zipUrl = 'https://raw.githubusercontent.com/guna7200/ddarchteture/main/live_dist.zip';
$tempZip = __DIR__ . '/temp_live_dist.zip';

// Download zip directly server-to-server
$zipContent = @file_get_contents($zipUrl);
if (!$zipContent) {
    // Fallback using cURL if allow_url_fopen is disabled in php.ini
    $ch = curl_init($zipUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $zipContent = curl_exec($ch);
    curl_close($ch);
}

if ($zipContent && strlen($zipContent) > 1000) {
    file_put_contents($tempZip, $zipContent);
    $zip = new ZipArchive();
    if ($zip->open($tempZip) === TRUE) {
        $zip->extractTo(__DIR__);
        $zip->close();
        @unlink($tempZip);
        echo "SUCCESS: Auto-deployed latest website build from GitHub!";
    } else {
        http_response_code(500);
        echo "ERROR: Failed to extract zip file";
    }
} else {
    http_response_code(500);
    echo "ERROR: Unable to fetch zip from GitHub raw URL";
}
