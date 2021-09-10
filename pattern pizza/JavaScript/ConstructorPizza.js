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
}

Pizza.prototype.addIngridients = function (ingridient) {

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
    ingridientContainers = document.querySelectorAll(".ing_cont"),
    ingridients = document.querySelectorAll(".draggable"),
    elementClones = [null, null, null, null, null, null, null, null, null];

let currentDroppable = null;
ingridients.forEach((el, ind) => {
    el.addEventListener("mousedown", (e) => {

        let shiftX = e.clientX - el.getBoundingClientRect().left;
        let shiftY = e.clientY - el.getBoundingClientRect().top;
        if (window.getComputedStyle(el)["position"] === "absolute") {
            setCakeSize()
        } else {
            setIngSize(el)
        }

        el.style.position = 'absolute';
        el.style.zIndex = 100;

        document.body.append(el);

        moveAt(e.pageX, e.pageY);

        function moveAt(pageX, pageY) {
            el.style.left = pageX - shiftX + 'px';
            el.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);

            el.hidden = true;
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            el.hidden = false;

            if (!elemBelow) return;
            let droppableBelow = elemBelow.closest('.droppable');

            if (currentDroppable != droppableBelow) {

                if (currentDroppable) {
                    leaveDroppable(currentDroppable);
                }
                currentDroppable = droppableBelow;
                if (currentDroppable) {
                    enterDroppable(currentDroppable);
                }
            }
        };

        document.addEventListener('mousemove', onMouseMove);

        function onMouseUp() {
            if (currentDroppable) {
                setCakeSize()
                for (i = 0; i < f0.elements.length; i++) {
                    if (f0.elements[i].checked === true) {
                        switch (i) {
                            case 0: {
                                el.style.transform = "scale(0.8)";
                                break;
                            }
                            case 1: {
                                el.style.transform = "scale(0.9)";
                                break;
                            }
                            case 2: {
                                el.style.transform = "scale(1)";
                            }
                        }
                    }
                }
                el.style.left = "1px";
                el.style.top = "2px";
                el.style.opacity = "1";
                goal.style.position = 'relative'
                goal.append(el);
                goal.style.background = "";
                ingDetermination(ind)
            } else {
                elementClones[ind].remove()
                elementClones[ind] = null
                setIngSize(el)
                el.style.position = "inherit"
                ingridientContainers[ind].prepend(el)
                ingDelete(ind)
            }
            document.removeEventListener('mousemove', onMouseMove);
            el.onmouseup = null;
        };

        el.addEventListener("mouseup", onMouseUp)
        
        if (elementClones[ind] === null) {
            elementClones[ind] = el.cloneNode(true)
            elementClones[ind].style.position = "inherit"
            ingridientContainers[ind].prepend(elementClones[ind])
            // elementClones[ind].style.opacity = 0;
        }
    })

    el.ondragstart = function () {
        return false;
    };

    function enterDroppable(elem) {
        elem.style.background = 'rgb(221, 246, 250)';
        el.style.opacity = ".5";
    }

    function leaveDroppable(elem) {
        elem.style.background = '';
        el.style.opacity = "1";
    }

    function setCakeSize() {
        let widthCake = parseInt(window.getComputedStyle(cake)["width"])
        el.style.width = widthCake - 10 + "px";
        el.style.height = "auto";
        el.style.transform = "scale(1)"
    }
})

function ingDetermination(ind) {
    switch (ind) {
        case 0: {
            pizza.addIngridients(Pizza.Sauce_Ketchup);
            break;
        }
        case 1: {
            pizza.addIngridients(Pizza.Sauce_BBQ);
            break;
        }
        case 2: {
            pizza.addIngridients(Pizza.Sauce_Ricotta);
            break;
        }
        case 3: {
            pizza.addIngridients(Pizza.Topping_Cheese);
            break;
        }
        case 4: {
            pizza.addIngridients(Pizza.Topping_Feta);
            break;
        }
        case 5: {
            pizza.addIngridients(Pizza.Topping_Mozzarella);
            break;
        }
        case 6: {
            pizza.addIngridients(Pizza.Topping_Veal);
            break;
        }
        case 7: {
            pizza.addIngridients(Pizza.Topping_Tomato);
            break;
        }
        case 8: {
            pizza.addIngridients(Pizza.Topping_Mushrooms);
            break;
        }
    }

}

function ingDelete(ind) {
    switch (ind) {
        case 0: {
            pizza.removeIngridients(Pizza.Sauce_Ketchup);
            break;
        }
        case 1: {
            pizza.removeIngridients(Pizza.Sauce_BBQ);
            break;
        }
        case 2: {
            pizza.removeIngridients(Pizza.Sauce_Ricotta);
            break;
        }
        case 3: {
            pizza.removeIngridients(Pizza.Topping_Cheese);
            break;
        }
        case 4: {
            pizza.removeIngridients(Pizza.Topping_Feta);
            break;
        }
        case 5: {
            pizza.removeIngridients(Pizza.Topping_Mozzarella);
            break;
        }
        case 6: {
            pizza.removeIngridients(Pizza.Topping_Veal);
            break;
        }
        case 7: {
            pizza.removeIngridients(Pizza.Topping_Tomato);
            break;
        }
        case 8: {
            pizza.removeIngridients(Pizza.Topping_Mushrooms);
            break;
        }
    }
}
function setIngSize(element) {
    element.style.height = 100 + "px";
    element.style.width = "auto";
}

window.addEventListener('DOMContentLoaded', () => {

    createPizza(Pizza.Size_Big);

    for (i = 0; i < f0.elements.length; i++) {
        f0.elements[i].addEventListener('click', (e) => {
            elementClones.forEach((e, i) => {
                if (e != null) {
                    e.remove()
                    e = null
                    setIngSize(ingridients[i])
                    ingridients[i].style.position = "inherit"
                    ingridientContainers[i].prepend(ingridients[i])
                    ingDelete(i)
                }
            })

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

