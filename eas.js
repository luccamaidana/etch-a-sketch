const container = document.querySelector(".container")
const divGrid = []

const createGrid = ()=>{
    for (let i = 1; i <= 16; i++) {
        for (let j = 1; j <= 16; j++) {
            let div = document.createElement("div")
            div.classList.add("div-item")
            container.appendChild(div)
            divGrid.push(div)
        }
    }
}

const hoverDiv = (div)=>{
    div.forEach(div =>{
        div.addEventListener("mouseover",()=>{
            div.classList.add("div-hover")
        })
    })
}

createGrid()
hoverDiv(divGrid)
