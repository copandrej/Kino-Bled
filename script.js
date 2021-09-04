function zapri(el) {
    (el.clientHeight >= 45) ? el.style.height = "41px" : el.style.height = (el.childNodes[3].clientHeight + 41).toString() + "px";
}


window.addEventListener("load", () => {
    let DneviSlo = ["TOREK", "SREDA", "ČETRTEK", "PETEK", "SOBOTA"];
    let DneviEng = ["TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    let userLang = navigator.language || navigator.userLanguage; 
    let trenutniJezik = "en"
    if(userLang == "sl" && trenutniJezik != "sl") 
        spremembaJezika("sl");

    document.querySelector(".slo").addEventListener("click", () => {spremembaJezika("sl");});
    document.querySelector(".eng").addEventListener("click", () => {spremembaJezika("en");});


    function spremembaJezika(Jezik) {
        let spremeni = document.getElementsByClassName("dan");
        let prevedi = document.getElementsByClassName("prevedi");
        if (Jezik == "sl") {
            trenutniJezik = "sl";     
            for (let i = 0; i < spremeni.length; i++)
                spremeni[i].innerText = DneviSlo[i];
            prevedi[0].innerText = "ZAVOD ASPEKT    PREDSTAVLJA";
            prevedi[1].innerText = "PIŠITE NAM";
            
        } else {
            trenutniJezik = "en";
            for (let i = 0; i < spremeni.length; i++)
                spremeni[i].innerText = DneviEng[i];
            prevedi[0].innerText = "ASPEKT INSTITUTE    PRESENTS";
            prevedi[1].innerText = "EMAIL US";

        }
    }
});