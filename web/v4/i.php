<?php
//Image server for xdbl.dev (v5)
if (isset($_GET['i'])) {
    if (strpos($bro, "(compatible; Discordbot/2.0;") == true || strpos($bro, "Intel Mac OS X 11.6;") == true) {
        header("Location: https://xdbl.dev/x/" . $_GET['i']);
        die();
    } else
        header("Location: https://xdbl.dev/?i=" . $_GET['i']);
} else header("Location: https://xdbl.dev/?i=" . $_GET['i']);