function hover(){
    let liElements = document.querySelectorAll("li");
    liElements.forEach((e) => {
        e.onmouseover = function(){e.children[1].classList.add("show");}
        e.onmouseout = function(){e.children[1].classList.remove("show");} 
    });
}
function liCount() {
    let ftSpan = document.getElementById("count");
    let liElements = document.querySelectorAll("li");
    let count = 0;
    let n = liElements.length;
    for(let i = 0; i < n ;i++){
        element = liElements[i].children[0].children[1]
        if(element.classList.contains("notchecked")){
            count++;
        }
    }
    ftSpan.textContent = "";
    ftSpan.textContent = count + " items left";
}
function xBtn() {
    let liElements = document.querySelectorAll("li");
    liElements.forEach((e) => {
        e.children[1].addEventListener("click", () => {
            e.children[1].parentElement.remove();
            liCount();
        });
        liCount();
    });
    liCount();
}
function tglFnc() {
    let toggles = document.querySelectorAll(".toggle");
    toggles.forEach((e) => {
        e.addEventListener("change", function () {
            const span = this.nextElementSibling;
            if (this.checked) {
                span.classList.remove("notchecked");
                span.classList.add("checked");
            } else {
                span.classList.remove("checked");
                span.classList.add("notchecked");
            }
            liCount();
        });
    });
}
function toggleAll(){
    let toggles = document.querySelectorAll(".toggle");
    let allToggle = document.getElementById("doneAll");
    let allActive = false;
    allToggle.addEventListener('click',()=>{
        allActive = !allActive;
        toggles.forEach((button) => {
            const span = button.nextElementSibling;
            if (allActive) {
                span.classList.remove('notchecked');
                button.checked = true;
                span.classList.add('checked');
            } else {
                span.classList.add('notchecked');
                button.checked = false;
                span.classList.remove('checked');
            }
        });
        liCount();
    })

}
function active(){
    let activeBtn = document.getElementById("showActive")
    let liElements = document.querySelectorAll("li")
    activeBtn.addEventListener('click',()=>{
        liElements.forEach((e)=>{
            if(e.children[0].children[1].classList.contains("notchecked")){
                e.classList.remove("hide");
            }
            else{
                e.classList.add("hide")
            }
        })
    })
}
function all(){
    let allBtn = document.getElementById("showAll")
    let liElements = document.querySelectorAll("li")
    allBtn.addEventListener('click',()=>{
        liElements.forEach((e)=>{
            if(e.classList.contains("hide")){
                e.classList.remove("hide");
            }
        })
    }) 
}
function completed(){
    let completedBtn = document.getElementById("showCompleted")
    let liElements = document.querySelectorAll("li")
    completedBtn.addEventListener('click',()=>{
        liElements.forEach((e)=>{
            if(!e.children[0].children[1].classList.contains("notchecked")){
                e.classList.remove("hide");
            }
            else{
                e.classList.add("hide")
            }
        })
    })
}
function clearCompleted(){
    let clearComp = document.getElementById("clearCompleted")
    let liElements = document.querySelectorAll("li")
    clearComp.addEventListener('click',()=>{
        liElements.forEach((e)=>{
            if(e.children[0].children[1].classList.contains("notchecked")){
                e.classList.remove("hide");
            }
            else{
                e.children[0].parentElement.remove();
            }
        })
    })
}
function addOnEnter() {
    let input = document.getElementById("input");
    let ulList = document.getElementById("list");
    input.addEventListener("keypress", (e) => {
        let value = e.target.value.trim();
        if (e.key === "Enter") {
            let newLi = document.createElement("li");
            newLi.innerHTML = `
                <div class="li-left">
                    <input class="toggle" type="checkbox">
                    <span class="notchecked">${value}</span>
                </div>
                <button class="deleteBtn"><img class="deleteSvg" src="./assets/x.svg" alt=""></button>
            `;
            ulList.append(newLi);
            newLi.classList.add("transition");
            document.getElementById("input").value = "";
            hover();
            xBtn();
            liCount();
            tglFnc();
            toggleAll();
            active();
            all();
            active();
            completed();
            clearCompleted();
        }
    });
}



//Initialization
hover();
addOnEnter();
xBtn();
tglFnc();
toggleAll();
all();
active();
completed();
clearCompleted();