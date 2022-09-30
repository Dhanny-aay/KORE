// gallery item filter

const filterbuttons = document.querySelector(".filterbtns").children;

const items = document.querySelector(".row").children;


for (let i = 0; i < filterbuttons.length; i++){
    filterbuttons[i].addEventListener('click', function(){
        for (let j = 0; j < filterbuttons.length; j++){
            filterbuttons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")

        for (let k = 0; k < items.length; k++){
            items[k].style.display = 'none';
            if(target == items[k].getAttribute("data-id")){
                items[k].style.display = "block";
            }
            if(target == 'overview'){
                items[k].style.display = 'block';
            }
        }
    })
}
// side bar gallery item filter

const filterbuttons1 = document.querySelector("#filterbtns").children;


for (let i = 0; i < filterbuttons1.length; i++){
    filterbuttons1[i].addEventListener('click', function(){
        for (let j = 0; j < filterbuttons1.length; j++){
            filterbuttons1[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")

        for (let k = 0; k < items.length; k++){
            items[k].style.display = 'none';
            if(target == items[k].getAttribute("data-id")){
                items[k].style.display = "block";
            }
            if(target == 'overview'){
                items[k].style.display = 'block';
            }
        }
    })
}

// open overlay

const open = document.querySelector('.nav-hmbgr');
const close = document.querySelector('.closebtn');

const overlay = document.querySelector('.overlay-menu');

    open.addEventListener('click', function(){
        if(overlay.style.display=='none'){
            overlay.style.display='block';
        }
        else{
            overlay.style.display='block';
        }
    });


close.addEventListener('click', function(){
    if(overlay.style.display=='block'){
        overlay.style.display='none';
    }
});
