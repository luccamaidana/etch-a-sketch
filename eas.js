const container = document.querySelector(".container")
const button = document.querySelector("#changeGrid")
const delBtn = document.querySelector("#delete")
let divGrid = []
let pixelCant = 16

const createGrid = (s)=>{
    container.innerHTML = ``
    divGrid = []
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

const hoverDiv = ()=>{
    divGrid.forEach(div =>{
        div.addEventListener("mouseover",()=>{
            div.classList.add("div-hover")
        })
    })
}

const popUp = ()=>{
    button.addEventListener("click",()=>{
        pixelCant = Number(prompt(`Change the numbers of squares per side for the new grid.\n\nE.g: 16 (min amount) - 100 (max amount)`))
        if (pixelCant >= 16 && pixelCant <=100){
            createGrid(pixelCant)
        }
        else {
            alert(`Please, enter a number between 16 and 100`)
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