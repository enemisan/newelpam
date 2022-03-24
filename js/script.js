const header = document.getElementsByClassName("header");

const showClass = () => {
    let i = 0;
    // if (header[i].style.display == "") {
    //     header[i].style.display = "block";
    // }
    header[i].style.display = "block";
    i++;
    setTimeout("showClass()", 3000)
}

showClass();