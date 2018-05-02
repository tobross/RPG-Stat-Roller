$(document).ready(function () {

    $("#STR").on("click", function () {
        $("#strNum").text(roll(minN, maxN));
    })
    $("#DEX").on("click", function () {
        $("#dexNum").text(roll(minN, maxN));
    })
    $("#CON").on("click", function () {
        $("#conNum").text(roll(minN, maxN));
    })
    $("#INT").on("click", function () {
        $("#intNum").text(roll(minN, maxN));
    })
    $("#WIS").on("click", function () {
        $("#wisNum").text(roll(minN, maxN));
    })
    $("#CHA").on("click", function () {
        $("#chaNum").text(roll(minN, maxN));
    })
    var minN = 3;
    var maxN = 18;
    var stats = [];
    var random; roll(minN, maxN);

    function roll(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    $(".allStats").on("click", function () {
        stats = [];
        for (i = 0; i < 6; i++) {
            random = roll(minN, maxN);

            function roll(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }
            stats.push(random);
        }
        $("#strNum").text(stats[0]);
        $("#dexNum").text(stats[1]);
        $("#conNum").text(stats[2]);
        $("#intNum").text(stats[3]);
        $("#wisNum").text(stats[4]);
        $("#chaNum").text(stats[5]);
    })
});