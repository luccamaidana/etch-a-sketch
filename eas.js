const container = document.querySelector(".container")
const button = document.querySelector("#changeGrid")
const delBtn = document.querySelector("#delete")
let divGrid = []
let pixelCant = 16

const createGrid = (s)=>{
    container.innerHTML = ``
    divGrid = []
    if (s===40)
        container.setAttribute(`style`,`width:${s*20.05}px; height: ${s*20.05}px`)
    else
        container.setAttribute(`style`,`width:${s*20.125}px; height: ${s*20.125}px`)

    for (let i = 1; i <= s; i++) {
        for (let j = 1; j <= s; j++) {
            let div = document.createElement("div")
            div.classList.add("div-item")
            container.appendChild(div)
            divGrid.push(div)
        }
    }
    hoverDiv()
}

const getRndColor = ()=>{
    r = Math.floor(Math.random() * 256)
    g = Math.floor(Math.random() * 256)
    b = Math.floor(Math.random() * 256)
    return `rgb(${r},${g},${b})`
}

/* const hoverDiv = ()=>{
    divGrid.forEach(div =>{
        div.addEventListener("mouseover",()=>{
            div.setAttribute(`style`, `background-color:${getRndColor()}; opacity: ${40}%`);
            //div.classList.add("div-hover")
        })
    })
} */

const hoverDiv = () => {
    divGrid.forEach(div => {
        div.addEventListener("mouseover", () => {
            div.setAttribute(`style`, `background-color:${getRndColor()}; opacity: ${40}%`);
        });

        div.addEventListener("touchmove", (event) => {
            event.preventDefault(); 
            let touch = event.touches[0]; 
            let target = document.elementFromPoint(touch.clientX, touch.clientY); 

            if (target && target.classList.contains("div-item")) {
                div.setAttribute(`style`, `background-color:${getRndColor()}; opacity: ${40}%`);
            }
        });
    });
}

const popUp = ()=>{
    button.addEventListener("click",()=>{
        pixelCant = Number(prompt(`Change the numbers of squares per side for the new grid.\n\nE.g: 16 (min amount) - 40 (max amount)`))
        if (pixelCant >= 16 && pixelCant <=40){
            createGrid(pixelCant)
        }
        else {
            alert(`Please, enter a number between 16 and 40`)
        }
    })
}

const deleteGrid = ()=>{
    delBtn.addEventListener("click",()=>{
       createGrid(pixelCant)
    })
}

const main = ()=>{
    popUp()
    deleteGrid()
    createGrid(pixelCant)
}

main()