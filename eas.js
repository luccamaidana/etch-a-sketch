const container = document.querySelector(".container")
const button = document.querySelector("#changeGrid")
const divGrid = []
let size = 16

const createGrid = (s)=>{
    container.innerHTML = ``
    for (let i = 1; i <= s; i++) {
        for (let j = 1; j <= s; j++) {
            let div = document.createElement("div")
            div.classList.add("div-item")
            container.appendChild(div)
            divGrid.push(div)
        }
    }
    hoverDiv(divGrid)
}

const hoverDiv = (div)=>{
    div.forEach(div =>{
        div.addEventListener("mouseover",()=>{
            div.classList.add("div-hover")
        })
    })
}

const popUp = ()=>{
    button.addEventListener("click",()=>{
        let pixelCant = Number(prompt(`Change the numbers of squares per side for the new grid.\n\nE.g: 16 (min amount) - 100 (max amount)`))
        if (pixelCant >= 16 && pixelCant <=100){
            createGrid(pixelCant)
        } else {
            alert(`Please, enter a number between 16 and 100`)
        }
    })
}

const main = ()=>{
    popUp()
    createGrid(size)
    
}

main()