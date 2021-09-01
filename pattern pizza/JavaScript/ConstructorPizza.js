const f0 = document.forms[0];
const divPrice = document.querySelector('.price'),
    spanPrice = divPrice.firstChild.lastChild;

const divSauces = document.querySelector('.sauces');
const spanSauces = divSauces.firstChild.lastChild;

const divToppings = document.querySelector('.topings');
const spanToppings = divToppings.firstChild.lastChild;

let price = 0;
const toppings = [], sauces = [];

function Pizza(size) {
    this.size = size;
}

class Parameters {
    constructor(price, name) {
        this.price = price;
        this.name = name;
    }
}

class Ingredient {
    constructor(price, name, type) {
        this.price = price;
        this.name = name;
        this.type = type;
        this.added = false;
    }
}
Pizza.Size_Big = new Parameters(60, 'Big')
Pizza.Size_Midle = new Parameters(40, 'Midle')
Pizza.Size_Small = new Parameters(25, 'Small')
Pizza.Topping_Cheese = new Ingredient(20, 'Сир')
Pizza.Topping_Feta = new Ingredient(10, 'Фета')
Pizza.Topping_Mozzarella = new Ingredient(15, 'Моцарелла')
Pizza.Topping_Veal = new Ingredient(30, 'Телятина')
Pizza.Topping_Tomato = new Ingredient(10, 'Помiдори')
Pizza.Topping_Mushrooms = new Ingredient(15, 'Гриби')
Pizza.Sauce_Ketchup = new Ingredient(5, 'Кетчуп', 'Sauce')
Pizza.Sauce_BBQ = new Ingredient(10, 'BBQ', 'Sauce')
Pizza.Sauce_Ricotta = new Ingredient(15, 'Рiкотта', 'Sauce')

const createPizza = (size) => {
    pizza = new Pizza(size)
    price = pizza.size.price
    let span = divPrice.firstChild.lastChild;
    span.innerHTML = pizza.size.price + " грн";
    span.style.textTransform = "lowercase";
}

Pizza.prototype.addIngridients = function (ingridient) {

    if (ingridient.added === true) {
        alert("Компонент " + ingridient.name + " вже є")
    } else {
        switch (ingridient.name) {
            case 'Сир': {
                this.cheese = ingridient;
                ingridient.added = true;
                break;
            }
            case 'Фета': {
                this.feta = ingridient;
                ingridient.added = true;
                break;
            }
            case 'Моцарелла': {
                this.mozzarella = ingridient;
                ingridient.added = true;
                break;
            }
            case 'Телятина': {
                this.veal = ingridient;
                ingridient.added = true;
                break;
            }
            case 'Помiдори': {
                this.tomato = ingridient;
                ingridient.added = true;
                break;
            }
            case 'Гриби': {
                this.mushrooms = ingridient;
                ingridient.added = true;
                break;
            }
            case 'Кетчуп': {
                this.ketchup = ingridient;
                ingridient.added = true;
                break;
            }
            case 'BBQ': {
                this.bbq = ingridient;
                ingridient.added = true;
                break;
            }
            case 'Рiкотта': {
                this.ricotta = ingridient;
                ingridient.added = true;
                break;
            }
        }

        if (ingridient.type == 'Sauce') {
            sauces.push(ingridient.name);
            spanSauces.innerHTML = sauces.toString()
            spanSauces.style.textTransform = "capitalize";
        } else {
            toppings.push(ingridient.name);
            spanToppings.innerHTML = toppings.toString()
            spanToppings.style.textTransform = "capitalize";
        }
        price = price + ingridient.price;
        spanPrice.innerHTML = price + " грн";
    }
}
Pizza.prototype.removeIngridients = function (ingridient) {
    if (ingridient.added === true) {
        switch (ingridient.name) {
            case 'Сир': {
                delete this.cheese;
                ingridient.added = false;
                break;
            }
            case 'Фета': {
                delete this.feta
                ingridient.added = false;
                break;
            }
            case 'Моцарелла': {
                delete this.mozzarella
                ingridient.added = false;
                break;
            }
            case 'Телятина': {
                delete this.veal
                ingridient.added = false;
                break;
            }
            case 'Помiдори': {
                delete this.tomato
                ingridient.added = false;
                break;
            }
            case 'Гриби': {
                delete this.mushrooms
                ingridient.added = false;
                break;
            }
            case 'Кетчуп': {
                delete this.ketchup
                ingridient.added = false;
                break;
            }
            case 'BBQ': {
                delete this.bbq
                ingridient.added = false;
                break;
            }
            case 'Рiкотта': {
                delete this.ricotta
                ingridient.added = false;
                break;
            }
        }

        if (ingridient.type == 'Sauce') {
            sauces.forEach(function (el, i, a) {
                if (el == ingridient.name) {
                    a.splice(i, 1)
                }
            });
            spanSauces.innerHTML = sauces.toString()
            spanSauces.style.textTransform = "capitalize";
        } else {
            toppings.forEach(function (el, i, a) {
                if (el == ingridient.name) {
                    a.splice(i, 1)
                }
            });
            spanToppings.innerHTML = toppings.toString()
            spanToppings.style.textTransform = "capitalize";
        }
        price = price - ingridient.price;
        spanPrice.innerHTML = price + " грн";

    }

}



//Drag and drop
let cake = document.querySelector('[alt = "Корж класичний"]'),
    goal = document.querySelector('.droppable'),
    ball = document.querySelector("#sauceClassic");
let div = document.querySelector(".ingridients").childNodes[3];
//let ballClone = null;
let currentDroppable = null;

ball.onmousedown = (e) => {

    // if (ballClone === null) {
    //     ballClone = ball.cloneNode(true)
    //     div.prepend(ballClone)
    // }
    // Передвижение с учётом изначального сдвига shiftX/shiftY.
    let shiftX = e.clientX - ball.getBoundingClientRect().left;
    let shiftY = e.clientY - ball.getBoundingClientRect().top;
    if (window.getComputedStyle(ball)["position"] === "absolute") {
        setSize()
    } else {
        ball.style.height = 100 + "px";
        ball.style.width = "auto";
    }
    // разместить на том же месте, но в абсолютных координатах
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;


    // переместим в body, чтобы мяч был точно не внутри position:relative
    document.body.append(ball);

    // передвинуть мяч под координаты курсора
    moveAt(e.pageX, e.pageY);

    // и определить точку в которую нужно преместиться
    function moveAt(pageX, pageY) {
        ball.style.left = pageX - shiftX + 'px';
        ball.style.top = pageY - shiftY + 'px';
    }
    // перемещать по экрану
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        ball.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        ball.hidden = false;

        if (!elemBelow) return;
        let droppableBelow = elemBelow.closest('.droppable');

        if (currentDroppable != droppableBelow) {

            if (currentDroppable) { // null если мы были не над droppable до этого события
                // (например, над пустым пространством)
                leaveDroppable(currentDroppable);
            }
            currentDroppable = droppableBelow;
            if (currentDroppable) { // null если мы не над droppable сейчас, во время этого события
                // (например, только что покинули droppable)
                enterDroppable(currentDroppable);
            }
        }
    };
    document.addEventListener('mousemove', onMouseMove);

    ball.onmouseup = function () {
        if (currentDroppable) {
            setSize()
            for (i = 0; i < f0.elements.length; i++) {
        if (f0.elements[i].checked === true) {
            switch (i) {
                case 0: {
                    ball.style.transform = "scale(0.8)";
                    break;
                }
                case 1: {
                    ball.style.transform = "scale(0.9)";
                    break;
                }
                case 2: {
                    ball.style.transform = "scale(1)";
                }
            }
        }
    }
            ball.style.left = "1px";
            ball.style.top = "2px";
            ball.style.opacity = "1";
            goal.style.position = 'relative'
            goal.append(ball);
            goal.style.background = "";
            pizza.addIngridients(Pizza.Sauce_Ketchup)
        } else {
            ball.style.height = 100 + "px";
            ball.style.width = "auto";
            ball.style.position = "inherit"
            div.prepend(ball)
            pizza.removeIngridients(Pizza.Sauce_Ketchup)
        }
        document.removeEventListener('mousemove', onMouseMove);
        ball.onmouseup = null;
    }


}
function enterDroppable(elem) {
    elem.style.background = 'rgb(221, 246, 250)';
    ball.style.opacity = ".5";
}

function leaveDroppable(elem) {
    elem.style.background = '';
    ball.style.opacity = "1";
}

function setSize() {
    let widthCake = parseInt(window.getComputedStyle(cake)["width"])
    ball.style.width = widthCake - 10 + "px";
    ball.style.height = "auto";
    ball.style.transform = "scale(1)"
}
// Отмена действия браузера по событию dragstart.
ball.ondragstart = function () {
    return false;
};
// отследить окончание переноса
// ball.onmouseup = () => {
//     if (currentDroppable) {
//         ballInGoal();

//         goal.style.backgroundColor = "yellow"
//     } else {
//         ballClone.remove()
//         ballClone = null
//         ball.className = "draggable"
//         ball.style.position = "inherit"
//         div.prepend(ball)
//     }

//     document.onmousemove = null;
//     ball.onmouseup = null;
// };
window.addEventListener('DOMContentLoaded', () => {

    createPizza(Pizza.Size_Big);

    for (i = 0; i < f0.elements.length; i++) {
        f0.elements[i].addEventListener('click', (e) => {
            switch (e.target.getAttribute("id")) {
                case "small": {
                    createPizza(Pizza.Size_Small);
                    cake.style.transform = "scale(0.8)";
                    break;
                }
                case "mid": {
                    createPizza(Pizza.Size_Midle);
                    cake.style.transform = "scale(0.9)";
                    break;
                }
                case "big": {
                    createPizza(Pizza.Size_Big);
                    cake.style.transform = "scale(1)";
                }
            }
        })
    }
})

