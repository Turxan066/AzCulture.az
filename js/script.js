const menu_btn = document.querySelector(".menu_respon");
const menu = document.querySelector(".nav_mobile");
const menu_btn_x = document.querySelector(".nav_mobile_x");
const body = document.querySelector("body");
const search_btn = document.querySelector(".search_respon");
const search = document.querySelector(".search_input_respon");
const logo = document.querySelector(".logo");

const MenuFunction = () => {

    if(menu.className === "nav_mobile close") {
        menu.className = "nav_mobile open";
        body.style.overflow = "hidden"
    }
    else{
        menu.className = "nav_mobile close"
        body.style.overflow = "scroll"
    }

}
const SearchFunction = () => {

    if(search.className === "search_input_respon search_close") {
        search.className = "search_input_respon search_open";
        logo.style.display = "none"

    }
    else{   
        search.className = "search_input_respon search_close";
        logo.style.display = "block"
    }

}

menu_btn.addEventListener("click", MenuFunction);
menu_btn_x.addEventListener("click", MenuFunction);
search_btn.addEventListener("click", SearchFunction);