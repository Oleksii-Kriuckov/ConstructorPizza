const f0 = document.forms[0];
const divPrice = document.querySelector('.price'),
    spanPrice = divPrice.firstChild.lastChild;

const divSauces = document.querySelector('.sauces');
const spanSauces = divSauces.firstChild.lastChild;

const divToppings = document.querySelector('.topings');
const spanToppings = divToppings.firstChild.lastChild;

let price = 0;
const toppings = [], sauces = [];
// class Pizza {
//     constructor(size) {
//         
//     }
// }
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

// let pizza = new Pizza(Pizza.Size_Big)
// price = pizza.size.price
// pizza.addIngridients(Pizza.Sauce_Ketchup)
// pizza.addIngridients(Pizza.Sauce_BBQ)
// pizza.addIngridients(Pizza.Topping_Cheese)
// pizza.addIngridients(Pizza.Topping_Veal)
// pizza.addIngridients(Pizza.Topping_Mushrooms)
// pizza.removeIngridients(Pizza.Topping_Veal)
// pizza.removeIngridients(Pizza.Sauce_BBQ)

window.addEventListener('DOMContentLoaded', () => {
    // createPizza(Pizza.Size_Big);

    for (i = 0; i < f0.elements.length; i++) {
        f0.elements[i].addEventListener('click', (e) => {
            let cake = document.querySelector('[alt = "Корж класичний"]')
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
    //Drag and drop
    let currentDroppable = null;
    let draggable = document.querySelectorAll(".draggable")
    let cake = document.getElementsByClassName("table")
    draggable.forEach(function (el) {
        el.addEventListener('mousedown', (e)=>{
            let coords = getCoords(el);
            let shiftX = e.pageX - coords.left;
            let shiftY = e.pageY - coords.top;  
            el.style.position = 'absolute';
            document.body.appendChild(el);  
            moveAt(e);  

            el.style.zIndex = 100; 

            function moveAt(e) {
                el.style.left = e.pageX - shiftX + 'px';
                el.style.top = e.pageY - shiftY + 'px';
            }

            document.addEventListener('mousemove', (e)=>{
                moveAt(e);

                el.hidden = true;
                let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
                el.hidden = false;

                if (!elemBelow) return;
                let dropAbleBelow = elemBelow.closest("#cake");

                if (currentDroppable != dropAbleBelow) {
                    if (currentDroppable) {
                        el.style.opacity = "1";
                        currentDroppable.style.background = '';
                        el.style.width = "160px";
                        el.style.height = "100px";
                    }
                    currentDroppable = dropAbleBelow;

                    if (currentDroppable) {
                        el.style.opacity = ".8";
                        el.style.transform = "scale(1.5)";
                        currentDroppable.style.background = "pink";

                    }

                }
            })

            el.onmouseup = () => {
                if (currentDroppable) {
                    el.style.opacity = "1";
                        el.style.transform = "scale(2)";
                        cake.append(el)
                }

                document.onmousemove = null;
                el.onmouseup = null;
            };
        })

        el.ondragstart = () => {
            return false;
        };
        // отследить нажатие
        function getCoords(elem) { //
            let box = elem.getBoundingClientRect();
            return {
                top: box.top + pageYOffset,
                left: box.left + pageXOffset
            };
        }
    })

})

