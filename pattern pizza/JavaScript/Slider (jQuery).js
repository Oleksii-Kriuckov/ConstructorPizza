function displacementRight(elem) {

    let l = parseInt($(elem).css("left"))
    if (l == w) {
        $(elem).css({
            zIndex: 0
        }).animate({
            left: -w
        }, 1000, "linear",
            function () {
                let i;
                $.each(dot, function (ind, val) {
                    if ($(dot[ind]).css("backgroundColor") == "rgb(100, 100, 100)") {
                        i = ind
                    }
                })
                if (i == 2) {
                    $(dot[2]).css("backgroundColor", "rgb(170, 170, 170)")
                    $(dot[0]).css("backgroundColor", "rgb(100, 100, 100)")
                } else {
                    $(dot[i]).css("backgroundColor", "rgb(170, 170, 170)")
                    $(dot[i + 1]).css("backgroundColor", "rgb(100, 100, 100)")

                }
            })
    } else {
        $(elem).css({
            zIndex: "10",
        }).animate({
            left: l + w
        }, 1000, "linear");
    }
}

function displacementLeft(elem) {

    let l = parseInt($(elem).css("left"))
    if (l == -w) {
        $(elem).css({
            zIndex: 0
        }).animate({
            left: w
        }, 1000, "linear",
            function () {
                let i;
                $.each(dot, function (ind, val) {
                    if ($(dot[ind]).css("backgroundColor") == "rgb(100, 100, 100)") {
                        i = ind
                    }
                })
                if (i == 0) {
                    $(dot[0]).css("backgroundColor", "rgb(170, 170, 170)")
                    $(dot[2]).css("backgroundColor", "rgb(100, 100, 100)")
                } else {
                    $(dot[i]).css("backgroundColor", "rgb(170, 170, 170)")
                    $(dot[i - 1]).css("backgroundColor", "rgb(100, 100, 100)")

                }
            })
    } else {
        $(elem).css({
            zIndex: "10",
        }).animate({
            left: l - w
        }, 1000, "linear");
    }
}


$(".prev").click(function () {
    $.each(img, function (i, v) {
        displacementLeft(img[i])
    })
})
$(".next").click(function () {
    $.each(img, function (i, v) {
        displacementRight(img[i])
    })
})

img = $(".image")
let w = parseInt($(img[0]).css("width"))
$(".image:first").css("left", -w + "px")
$(".image:last").css("left", w + "px")

dot = $(".dot")
$(".dot:first").css("backgroundColor", "rgb(100, 100, 100)")

setInterval(() => {
    $.each(img, function (i, v) {
        displacementLeft(img[i])
    })
}, 5000);