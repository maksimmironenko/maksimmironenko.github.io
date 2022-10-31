function onClick() {
    let x = document.getElementById("kol").value;
    let y = document.getElementById("price").value;
    let r = document.getElementById("result");
    x = parseInt(x);
    y = parseInt(y);
    r.innerHTML = x * y;
    return false;
}

function prov() {
    let clear = document.getElementById("result");
    clear.innerHTML = "";
    let a = document.getElementById("kol").value;
    let b = document.getElementById("price").value;
    if ((/\D/.test(a)) || (/\D/.test(b))) {
        alert("Введенные данные некорректны!");
    } else {
        onClick();
    }
}

window.addEventListener("DOMContentLoaded", function () {
    let c = document.getElementById("my-button");
    c.addEventListener("click", prov);
});
