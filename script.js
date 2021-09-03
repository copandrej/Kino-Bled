//mal grdo ampak dela
function zapri(el) {
    if(el.clientHeight >= 40)
        el.style.height="35px";
    else 
        el.style.height=(el.childNodes[3].clientHeight + 35).toString() + "px";
}