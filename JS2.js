function onClick() {
    let x = document.getElementById("kol1").value;
    let y = document.getElementById("price").value;
    let r = document.getElementById("result1");
    x = parseInt(x);
    y = parseInt(y);
    r.innerHTML = x * y;
    return false;
}

function prov1() {
    let clear = document.getElementById("result1");
    clear.innerHTML = "";
    let a = document.getElementById("kol1").value;
    let b = document.getElementById("price").value;
    if ((/\D/.test(a)) || (/\D/.test(b))) {
        alert("Введенные данные некорректны!");
    } else {
        onClick();
    }
}

window.addEventListener("DOMContentLoaded", function () {
    let c = document.getElementById("my-button");
    c.addEventListener("click", prov1);
});


function Price() {
    if (prov() === true) {
        let s = document.getElementsByName("select");
        let select = s[0];
        let sum = 0;
        let prices = money();
        sum += prices.select[select.value - 1];
        if (select.value === "2") {
            let radios = document.getElementsByName("radio");
            radios.forEach(function (radio) {
                if (radio.checked) {
                    sum += prices.radio[radio.value - 1];
                }
            });
        } else if (select.value === "3") {
            let boxs = document.getElementsByName("prop");
            boxs.forEach(function (box) {
                if (box.checked) {
                    sum += prices.box[box.value - 1];
                }
            });
        }
        let kol = document.getElementById("kol").value;
        let result = document.getElementById("result");
        result.innerHTML = "Результат: " + kol * sum;
    }
}

function prov() {
    let a = document.getElementById("kol").value;
    return (/\D/.test(a)) === false;
}

function money() {
    return {
        box: [20],
        radio: [5, 7],
        select: [50, 75, 100]
    };
}

window.addEventListener("DOMContentLoaded", function () {
    let radioDIV = document.getElementById("radio");
    radioDIV.style.display = "none";
    let boxDIV = document.getElementById("boxs");
    boxDIV.style.display = "none";

    let s = document.getElementsByName("select");
    let select = s[0];
    select.addEventListener("change", function () {
        if (select.value === "1") {
            radioDIV.style.display = "none";
            boxDIV.style.display = "none";
        } else if (select.value === "2") {
            radioDIV.style.display = "block";
            boxDIV.style.display = "none";
        } else if (select.value === "3") {
            radioDIV.style.display = "none";
            boxDIV.style.display = "block";
        }
        new Price();
    });

    let radios = document.getElementsByName("radio");
    radios.forEach(function (radio) {
        radio.addEventListener("change", function () {
            new Price();
        });
    });

    let boxes = document.querySelectorAll("#boxs input");
    boxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            new Price();
        });
    });

    let kol = document.getElementById("kol");
    kol.addEventListener("change", function () {
        new Price();
    });
});
