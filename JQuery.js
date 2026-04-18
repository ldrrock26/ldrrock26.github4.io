$(document).ready(function () {
    const marioFacts = [
        {
            text: "Mario’s games have included platforming, racing, sports, party games, RPGs, and more.",
            className: "fact-style-1"
        },
        {
            text: "Yoshi became one of the most loved Mario allies after being introduced in Super Mario World.",
            className: "fact-style-2"
        },
        {
            text: "Super Mario 64 is often remembered as one of the most important 3D platform games ever made.",
            className: "fact-style-3"
        },
        {
            text: "Super Mario Galaxy gave the series a memorable space theme and gravity-based gameplay ideas.",
            className: "fact-style-4"
        },
        {
            text: "Super Mario Odyssey focused heavily on movement freedom and large areas to explore.",
            className: "fact-style-5"
        },
        {
            text: "The Mario series has stayed popular by changing its ideas while keeping its core style recognizable.",
            className: "fact-style-6"
        }
    ];

    let currentFactIndex = 0;

    $("#homeChangeTextBtn").on("click", function () {
        currentFactIndex = (currentFactIndex + 1) % marioFacts.length;

        $("#homeChangeTextP")
            .removeClass("fact-style-1 fact-style-2 fact-style-3 fact-style-4 fact-style-5 fact-style-6")
            .addClass(marioFacts[currentFactIndex].className)
            .text(marioFacts[currentFactIndex].text);
    });

    const characterFacts = [
        "Bowser is the main villain in many Mario platform games.",
        "Yoshi first appeared in Super Mario World on the Super Nintendo.",
        "Toad is one of Peach’s most loyal helpers in the Mushroom Kingdom.",
        "Daisy is best known for appearing in Mario sports and party games.",
        "Rosalina became especially important during the Super Mario Galaxy era.",
        "Donkey Kong was the first major opponent Mario faced in the arcade era."
    ];

    let characterFactIndex = 0;

    $("#charAddItemBtn").on("click", function () {
        if (characterFactIndex < characterFacts.length) {
            $("#charFactList").append("<li>" + characterFacts[characterFactIndex] + "</li>");
            characterFactIndex++;

            if (characterFactIndex === characterFacts.length) {
                $(this).text("All Facts Added");
                $(this).prop("disabled", true);
            }
        }
    });

    $("#resourceFadeBtn").on("click", function () {
        $("#resourceFadeVideo").fadeToggle();
    });
});