const container = document.querySelector(".container")




const createGrid = ()=>{

    let divGrid = []
    
    for (let i = 1; i <= 16; i++) {
        divGrid[i] = []
        for (let j = 1; j <= 16; j++) {
            let div = document.createElement("div")
            div.classList.add("div-item")
            divGrid[i][j] = div
            container.appendChild(divGrid[i][j])
        }
    }
    return divGrid;
}

const hoverDiv = (div)=>{
    div.addEventListener("hover",(e)=>{
        div.classList.add("div-hover")
    })
}

let div = createGrid()
hoverDiv(div)
