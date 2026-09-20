<?php
// Secret token for automatic deployment
$secret = 'archidee_deploy_2026_key';

if (!isset($_POST['secret']) || $_POST['secret'] !== $secret) {
    http_response_code(403);
    die('Forbidden: Invalid secret key');
}

if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
    $zipFile = $_FILES['file']['tmp_name'];
    $zip = new ZipArchive();
    if ($zip->open($zipFile) === TRUE) {
        $zip->extractTo(__DIR__);
        $zip->close();
        echo "SUCCESS: Live website updated successfully!";
    } else {
        http_response_code(500);
        echo "ERROR: Failed to open zip file";
    }
} else {
    http_response_code(400);
    echo "ERROR: No valid zip file uploaded";
}
