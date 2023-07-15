


function getMenu() {
    setTimeout(() => {
        const left = document.getElementById("left");

        let a = document.createElement("a");
        a.href = "http://127.0.0.1:5500/menu.html";
        left.appendChild(a);
        a.click();


    }, 2500)
}
getMenu()