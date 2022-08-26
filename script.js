const pDose = document.querySelector(".dose")
const wgtInput = document.querySelector(".todo-input")
const drugForm = document.querySelector(".drug-form")
const drugsList = document.getElementById("drugslist")
const searchBar = document.getElementById("search")
const drugCard = document.querySelector(".drug")
const wgtButton = document.querySelector(".drug-input")
const deleteBtn = document.querySelector(".delete-input")
const protoBtn = document.querySelector(".proto")
const adultpro = document.querySelector(".a-pro")
let drugsArray 

// const fetchDrugs = async () => {
//     const res = await fetch('http://localhost:3000/drugObject')
//     drugsArray = await res.json()
//     displayDrugs(drugsArray)
// }
//Fetch my db.json and save it into drugsArray variable
const fetchDrugs = () => {
    fetch('http://localhost:3000/drugObject')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        drugsArray = data
        displayDrugs(drugsArray)
    })    
}
//Displays Drugs array onto the page
function displayDrugs(drugsArray) {
    const htmlString = drugsArray.map((drug) => {
        return `
         <div class="drug"
             <h2 class = "dName" >${drug.Name}  <img src=${drug.pic}></img></h2>
             <p>${drug.Indication}
             <p>${drug.Adult} 
             <p class= "dose">${drug.Ped} 
        </div> 
         `
    })
        .join('')
    drugsList.innerHTML = htmlString
}
//filters drugs from search bar input
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase()
    //console.log(searchString)
    const drugFilter = drugsArray.filter((drug) => {
        return (
            drug.Name.toLowerCase().includes(searchString)
        )
    })
    displayDrugs(drugFilter)
})
    
wgtButton.addEventListener('click', handleDrugSubmit)

 function handleDrugSubmit(e) {
    console.log(e.target)
    e.preventDefault()
    const searchString = searchBar.value.toLowerCase()
    drugsArray.filter((drug) => {
        if (drug.Name.toLowerCase().includes(searchString)){
            const pedP = document.createElement("p")
            pedP.innerHTML = `Pediatric Dose for ${wgtInput.value}lbs is ${((drug.pedMult)*wgtInput.value)/2.2}${drug.pedmg} `
            drugForm.appendChild(pedP)
            pedP.classList.add('pedP')}
})
}

deleteBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(e.target === (deleteBtn)) {
        drugForm.children[4].remove()
        console.log(e.target)
    }
})
protoBtn.addEventListener('mouseover', handleMouseOver)

function handleMouseOver(e) {

    const searchString = searchBar.value.toLowerCase()
    if (e.target === protoBtn) {
        e.preventDefault()
        drugsArray.filter((drug) => {
            if (drug.Name.toLowerCase().includes(searchString)) {
                const protoP = document.createElement("p")
                protoP.innerHTML = `<img src=${drug.protos}></img>`
                drugForm.appendChild(protoP)
                protoP.classList.add('protoP')
                protoP.addEventListener("click", removePic)
            }
        })
    }
}
function removePic(e){
    e.target.remove()
}

fetchDrugs()
    




    // const card = userCardTemplate.content.cloneNode(true).children[0]
    // const name = card.querySelector("[data-name]")
    // const adult = card.querySelector("[data-adult]")
    // const ped = card.querySelector("[data-ped]")
    // const indic = card.querySelector("[data-indication]")
    // name.innerHTML = drug.Name
    // indic.innerHTML = drug.Indication
    // adult.innerHTML = drug.Adult
    // ped.innerHTML = drug.Ped
    // userCardContainer.append(card)
    // return { Name: drug.Name, Adult: drug.Adult, Ped: drug.Ped, element: card }



// searchInput.addEventListener("input", e => {
//     const value = e.target.value.toLowerCase()
//     drugs.forEach(drug => {
//         const isVisible = drug.Name.toLowerCase().includes(value)
//         drug.element.classList.toggle("hide", !isVisible)
//     })
// })

// userCardContainer.addEventListener('click', e => {
//     e.preventDefault()
//     if (e.target.className === "drug-input") {
//         //userCardContainer.forEach((dCard) => console.log)
//         const doseDiv = document.createElement("div")
//         doseDiv.classList.add("dose")
//         userCardContainer.appendChild(doseDiv)
//         const newDose1 = document.createElement("li")
//         newDose1.innerHTML = ("hi")
//         newDose1.classList.add('dose')
//         doseDiv.appendChild(newDose1)
//     //    pedDose.classList.add("pDose")
//     //     (userCardContainer).appendChild(pedDose)
        
//         console.log(newDose1)
//         console.log(e.target.children)
//     }
// })
// wgtInput.addEventListener('click', () => {
//     console.log("hey")
// drugs.forEach((dCard) => {
//     let form = document.createElement("form")
//     form.setAttribute("id", "drug-form")
//     let input = document.createElement("input")
//     input.setAttribute("type", "text")
//     input.setAttribute("class", "todo-input")
//     userCardContainer.appendChild(form)
//     form.appendChild(input)
     
//     console.log(dCard)
// })


// drugs = 
// drugObject.map((drug) => {
// const card = document.createElement("div")
// drugsList.appendChild(card)
// card.classList.add('card')
// const header = document.createElement("header")
// header.innerHTML = drug.Name
// card.appendChild(header)
// const indic = document.createElement("p1")
// indic.innerHTML = drug.Indication
// header.appendChild(indic)

// })

