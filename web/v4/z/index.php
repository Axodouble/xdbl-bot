<?php
//header("Location: https://xdbl.dev/?m=Naughty%20naughty,%20I%20store%20my%20functions%20here.");


if ($_SERVER['REQUEST_URI'] === '/z/') {
    // Redirect to the main page
    header('Location: https://xdbl.dev/?m=Uh-oh.%20You%20aren\'t%20supposed%20to%20be%20here.');
    exit;
}

function isImageFile($filename)
{
    $allowedExtensions = array('jpg', 'jpeg', 'png', 'gif');
    $fileExtension = pathinfo($filename, PATHINFO_EXTENSION);
    return in_array(strtolower($fileExtension), $allowedExtensions);
}

function loadDiscordQuotes($amount)
{
    $quotes = array(
        "\"<a><i>It ain't gay if it's a femboy.</i></a>\" - KaNin. (<a href=\"https://xdbl.dev/i?i=rkmLY\">Essay</a>)",
        "<video width=50% controls><source src=\"https://xdbl.dev/x/IlCzb.mp4\" type=\"video/mp4\">",
        "\"<a><i>Men don't even know what they're doing half the time- like-</i></a>\" - Jazzodouble.",
        "\"<a><i>It's getting pretty caucasian in here.</i></a>\" - <a href=\"https://metsh.tech/\"><c>Metshtival.<tiny> click me~</tiny><c></a>",
        "\"<a href=\"https://www.youtube.com/watch?v=L3wKzyIN1yk\"><i>I remember that one time that Sly downloaded the Physics Mod, killed a cow and then (messed around with) it.</i></a>\" - <a href=\"https://www.youtube.com/watch?v=L3wKzyIN1yk\"><c>Ekstacy.<c></a><br>",
    );

    // Shuffle the quotes array
    shuffle($quotes);

    // Select the first three quotes
    $randomQuotes = array_slice($quotes, 0, $amount);

    // Return the selected quotes
    return implode("", $randomQuotes);
}

function loadRandomQuote()
{
    $quotes = array(
        "\"<a><i>Money can't buy back your youth when you're old, a friend when you're lonely, or peace to your soul.</i></a>\" - Johnny Cash.",
        "\"<a><i>Can't shake the devil's hand and say you're only kidding.</i></a>\" - They Might Be Giants",
        "\"<a><i>Better be a warrior in the garden, than a gardener in the war. When the time comes to put down the sword, and pick up the plow, you'll know. Until that day comes.</i></a>\" - Old Japanese Saying.",
        "\"<a><i>A weapon does not decide whether or not to kill. A weapon is a manifestation of a decision that has already been made.</i></a>\" - On <a href=\"https://www.amazon.com/Cellist-Sarajevo-Steven-Galloway/dp/1594483655\">The Cellist of Sarajevo</a> by Steven Galloway.",
        "\"<a><i>It's not a resistance if you're winning; it's a revolution.</i></a>\" - Someone.",
        "\"<a><i>You can't call yourself peaceful if you're not capable of violence. If you're not capable of violence, you're not peaceful. You're harmless.</i></a>\" - Someone.",
        "\"<a><i>I do believe that, where there is only a choice between cowardice and violence, I would advise violence.</i></a>\" - Mahatma Gandhi.",
        "\"<a><i>It is a shame for a man to grow old without seeing the beauty and strength which his body is capable of.</i></a>\" - Socrates.",
        "Find us on <a href=\"https://axodouble.tech/\">https://axodouble.tech/</i></a>!</li>",
        "\"<a><i>Circumstances don't make the man. They only reveal him to himself</i></a>\" - Epictetus.",
        "https://xdbl.dev/x/VHKQw.jpg"
    );
    $rand = rand(0, count($quotes) - 1);
    return $quotes[$rand];
}

function loadHTML($message)
{
    ?>
    <html>

    <head>
        <link rel="stylesheet" href="/y/style.php">
        <meta charset="UTF-8">
        <title>xdbl.dev</title>
    </head>

    <body>
        <div class="parent">
            <a href="https://xdbl.dev/">
                <h1>XDBL.DEV</h1>
            </a>

            <?php echo ($message); ?><br><br><br>
            <?php if (!isset($_GET['i'])) { ?>
                <?php echo loadRandomQuote(); ?>
                <br><br><br>
                <h3>SHENANIGANS & FRENS</h3><i>Want to submit your own quotes? Send axodouble a message on Discord!</i>
                <br><br>
                <?php echo loadDiscordQuotes(1); ?>
            <?php }
            ?>
        </div>
    </body>

    </html>
<?php
}