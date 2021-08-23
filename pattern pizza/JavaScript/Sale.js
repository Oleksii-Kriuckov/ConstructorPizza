let banner = document.querySelector("#banner");
let button = banner.lastChild;
let widthElem = parseInt(window.getComputedStyle(banner)["width"])+parseInt(window.getComputedStyle(banner)["padding-left"])*2;
let heightElem = parseInt(window.getComputedStyle(banner)["height"])+parseInt(window.getComputedStyle(banner)["padding-top"])*2;;
let widthWindow = innerWidth, heightWindow = innerHeight, paramLeft, paramTop, counterX = 0, counterY = 0;

banner.onmouseover = function (e) {
    paramRight = parseInt(window.getComputedStyle(banner)["right"]);
    paramBottom = parseInt(window.getComputedStyle(banner)["bottom"]);

    const moveX = (x) => {
        banner.style.right = paramRight + x +"px";
    }
    const moveY = (y) => {
        banner.style.bottom = heightWindow - e.clientY + y +"px";
    }

    if (e.offsetX<widthElem/2) {
        if (e.clientX<(widthWindow-(widthElem+50))) {
            moveX(-50);
        } else {
            moveX(widthElem+50);
        }
    } else if (e.offsetX>widthElem/2) {
        if (e.clientX>(widthElem+50)) {
            moveX(50);
        } else {
            moveX(-(widthElem + 50));
        }   
    }

    // if (e.offsetY<heightElem/2) {
    //     if (e.pageY<heightWindow-(heightElem+50)) {
    //         moveY(50);
    //     } else {
    //         moveY(-(heightElem+50));
    //     }
    // } else if (e.offsetY>heightElem/2) {
    //     if (e.pageY>(heightElem+50)) {
    //         moveY(-(heightElem+50))
    //     } else {
    //         moveY(50);
    //     }
        
    // }
}