const li = document.querySelectorAll(".li");
const mov = document.querySelector(".mov");
const container = document.getElementsByTagName("header");

class Nav {
    constructor(element, mov) {
        this.element = element;
        this.mov = mov;
    }
    ejecutar() {
        this.element[0].onclick = ()=> {
            this.mov.style.left = 10+"px";
        }
        this.element[1].onclick = ()=> {
            this.mov.style.left = 135+"px";
        }
        this.element[2].onclick = ()=> {
            this.mov.style.left = 265+"px";
        }
        this.element[3].onclick = ()=> {
            this.mov.style.left = 390+"px";
        }
    }




    // ejecutar() {
    //     this.element.forEach(e => {
    //         e.onclick = ()=> {
    //             if(e.className == "li one") {
    //                 this.mov.style.left = 10+"px";
    //             } else if (e.className == "li two") {
    //                 this.mov.style.left = 135+"px";
    //             } else if (e.className == "li three") {
    //                 this.mov.style.left = 265+"px";
    //             } else if (e.className == "li four") {
    //                 this.mov.style.left = 390+"px";
    //             }
    //         }
    //     })
    // }
}

const nav = new Nav(li, mov); nav.ejecutar()