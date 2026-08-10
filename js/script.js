// Menu lateral
 const btnMenu = document.querySelector("#btnMenu");
const sidebar = document.querySelector("#sidebar");
const iconeMenu = document.querySelector("#iconeMenu");

btnMenu.addEventListener("click", function () {
    

    sidebar.classList.toggle("ativo");
    btnMenu.classList.toggle("ativo");
    document.body.classList.toggle("menu-ativo");

    if (sidebar.classList.contains("ativo")) {
        iconeMenu.textContent = "←";
    } else {
        iconeMenu.textContent = "☰";
    }

});