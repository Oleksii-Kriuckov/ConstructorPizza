const f1 = document.forms[1];
const buttonSubmit = document.forms[1].elements[4];

const patternName = /[a-zа-ї]+/i;
const msgName = "Ім'я некоректне";

const patternTel = /\+380\d{9}/g;
const msgTel = "Ви ввели неправильний номер телефону";

const patternEmail = /\b\w+@[a-z]+\.[a-z]{2,4}\b/g;
const msgEmail ="Ви ввели неправильну електронну пошту";

const patterns = [patternName, patternTel, patternEmail];
const messegeError = [msgName, msgTel, msgEmail];

buttonSubmit.addEventListener("click", (e) => {
    let empty = false, invalid = false;
    for (i = 0; i < f1.elements.length-2; i++) {
        if (f1.elements[i].value.length == 0) {
            empty = true;
        } else if (f1.elements[i].value.search(patterns[i])==-1) {
            alert(messegeError[i]);
            invalid = true;
        } 
    }
    if (empty) {
        alert("Всі поля повинні бути заповнені");
    } else if (!invalid) {
        document.location.href = "./thank-you.html"
    }
}, false)



