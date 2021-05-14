function sticky (stick){
    if (window.pageYOffset>=stick){
        topnav.classList.add("sticky");
    } else {
        topnav.classList.remove("sticky");
    }
}