window.onload = function(){

    let theme = localStorage.getItem("theme");

    if(theme === "dark"){
        document.body.classList.add("dark-mode");
    }
    else{
        document.body.classList.add("light-mode");
    }
};

function toggleTheme(){

    if(document.body.classList.contains("dark-mode")){

        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");

        localStorage.setItem("theme","light");
    }
    else{

        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");

        localStorage.setItem("theme","dark");
    }
}


