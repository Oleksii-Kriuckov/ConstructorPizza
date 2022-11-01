const f1 = document.forms[1];
const buttonSubmit = document.forms[1].elements[4];

const patternName = /[a-zа-ї]+/i;
const msgName = "Ім'я некоректне";

const patternTel = /\+380\d{9}/g;
const msgTel = "Hеправильний номер телефону";

const patternEmail = /\b\w+@[a-z]+\.[a-z]{2,4}\b/g;
const msgEmail ="Hеправильна електрона пошта";

const patterns = [patternName, patternTel, patternEmail];
const messegeError = [msgName, msgTel, msgEmail];

const elementsValue = []
const elementsPlaceholder = []

const clearError = () => {
    for (i = 0; i < f1.elements.length-2; i++) {
        if (f1.elements[i].style.backgroundColor === "red"){
            f1.elements[i].style.backgroundColor = "white"
            if (f1.elements[i].getAttribute("placeholder") === "Це поле повинне бути заповнено") {
                f1.elements[i].setAttribute("placeholder", elementsPlaceholder[i])
            } else {
                f1.elements[i].setAttribute("placeholder", elementsPlaceholder[i])
                f1.elements[i].value = elementsValue[i]
            }
            f1.elements[i].style.width = "240px"
        }
    }
    buttonSubmit.addEventListener("click", showError, false)
}

const showError = (e) => {
    buttonSubmit.removeEventListener("click", showError, false)
    let empty = false, invalid = false;
    for (i = 0; i < f1.elements.length-2; i++) {
        elementsValue[i] = f1.elements[i].value;
        elementsPlaceholder[i] = f1.elements[i].getAttribute("placeholder")
        if (f1.elements[i].value.length == 0) {
            f1.elements[i].style.backgroundColor = "red"
            f1.elements[i].style.width = "340px"
            f1.elements[i].value = ""
            f1.elements[i].setAttribute("placeholder", "Це поле повинне бути заповнено");
            empty = true;
        } else if (f1.elements[i].value.search(patterns[i])==-1) {
            f1.elements[i].style.backgroundColor = "red"
            f1.elements[i].style.width = "340px"
            f1.elements[i].value = ""
            f1.elements[i].setAttribute("placeholder", messegeError[i])
            invalid = true;
        } 
    }
    setTimeout(clearError, 4000)
    if (!empty && !invalid) {
        document.location.href = "./thank-you.html"
    }
}
buttonSubmit.addEventListener("click", showError, false)



