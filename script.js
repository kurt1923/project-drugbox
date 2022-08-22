const pDose = document.querySelector(".dose")
const wgtInput = document.querySelector(".todo-input")
const drugForm = document.querySelector(".drug-form")
const drugsList = document.getElementById("drugslist")
const searchBar = document.getElementById("search")
const drugCard = document.querySelector(".drug")
const wgtButton = document.querySelector(".drug-input")
const deleteBtn = document.querySelector(".delete-input")

const drugObject = [
    { Name: "Adenosine", Indication: "Indication: Symptomatic (poor perfusion) narrow complex tachycardia w/ pulse", Adult: "Adult Dose: 6mg Rapid Push", Ped: "Ped Dose: .1mg/kg up to 6mg", pedMult: .1, pedmg: 'mg'  },
    { Name: "Albuterol", Indication: "Indication: Wheezing due to bronchospasm", Adult: "Adult Dose: 2.5mg Nebulized", Ped: "Ped Dose: 2.5mg Nebulized" },
    { Name: "Amiodorone", Indication: "Indication: Ventricular Arrhythmias or Wide Complex Tachycardia with or without a pulse", Adult: "Adult Dose: 150 mg IV or IO. Wide Complex is 150mg drip over 10 minutes  ", Ped: "Ped Dose: 5 mg/kg IV or IO, up to 3 doses every 5 minutes" , pedMult: 5, pedmg: 'mg'},
    { Name: "Aspirin", Indication: "Indication: Cardiac type Chest Pain", Adult: "Adult Dose: 324mg", Ped: "Ped Dose: no protocol"},
    { Name: "Atropine Sulfate", Indication: "Indication: Asystole/Agonal/PEA, Bradycardia and Organophosphate poisoning", Adult: "Adult Dose: 0.5-1 mg IV as needed (max 3 mg)", Ped: "Ped Dose: 0.02 mg/kg (min 0.1 mg - max 1 mg)" , pedMult: .02, pedmg: 'mg'},
    { Name: "Calcium Gluconate", Indication: "Indication: Calcium Channel Overdose, Beta Blocker Overdose, Hydrofluoric Acid Exposure, Hyperkalemia", Adult: "Adult Dose: 1 g IV or IO", Ped: "Ped Dose: 20 mg/kg IV or IO", pedMult: 20, pedmg: 'mg' },
    { Name: "Dextrose 50%", Indication: "Indication: Cardiac Arrest or altered mentation with glucose level < 50 or Newly Born with heart rate < 60", Adult: "Adult Dose: 25 grams IV", Ped: "Ped Dose: ≤ 20 kg- mix dextrose 10%Adm. 0.5 gm/kg (5 ml/kg) IV /// ˃ 20 kg– mix dextrose 25%Adm. 0.5 gm/kg (2 ml/kg) IV", pedMult: .5, pedmg: 'g' },
    { Name: "Diphenhydramine", Indication: "Indication: Hives/Rash or Adult dystonic reaction", Adult: "Adult Dose: 50 mg IV or IM", Ped: "Ped Dose: 1 mg/kg IV or IM" , pedMult: 1, pedmg: 'mg'},
    { Name: "Epinephrine", Indication: "Indication: Allergic Reaction/Anaphylaxis, Reactive Airway Disease, PEDI Bradycardia, Cardiac Resuscitation", Adult: "Adult Dose: Cardiac Arrest:(1:10,000) 1 mg IV or IO, q 3-5 minutes // Allergic Reaction: 0.3 mg 1:1000 IM", Ped: "Ped Dose: (1:10,000) 0.01 mg/kg IV or IO, q 3-5 minutes // Allergic Reaction: Epinephrine 0.01 mg/kg 1:1000 IM (max single dose 0.3 mg)", pic: "epinephrine.jpg", pedMult: .01, pedmg: 'mg up to .3mg max' },
    { Name: "Glucagon", Indication: "Indication: Hypoglycemia < 60 if unable to obtain IV access, Beta blocker OD", Adult: "Adult Dose: 1mg IO, 2mg IN", Ped: "Ped Dose: .1mg/kg IM, .2mg/kg IN" , pedMult: .1, pedmg: 'mg IM, double if Nasal. Max 1mg IM, 2mg IN'},
    { Name: "Lidocaine", Indication: "Indication: Pain relief for IO infusion, cardiac arrest and post resuscitation care", Adult: "Adult Dose: Dose (1) is 1 to 1.5mg/kg IV or IO // Dose (2) is 0.5 to 0.75mg/kg", Ped: "Ped Dose: Lidocaine 1 mg/kg IV or IO Repeat two additional does every 5 minutes", pedMult: 1, pedmg: 'mg' },
    { Name: "Magnesium Sulfate", Indication: "Indication: IndicationsObstetrical Emergencies/ Seizures (adult only), Reactive Airway Disease, Toxic Exposure (Hydrofluoric Acid), Pulseless Arrest, Tachycardia w/ pulse (adults only)", Adult: "Adult Dose: Persistent VF/pulseless VT - Magnesium Sulfate 2 g IV (draw up 2 g in syringe, dilute in 10 mL of NS. Deliver over 1-2 minutes)Persistent VF/pulseless VT Magnesium Sulfate 2 g IV (draw up 2 g in syringe, dilute in 10 mL of NS. Deliver over 1-2 minutes) // Magnesium drip: Magnesium Sulfate 2 gm into 100 mL NS= Magnesium 20 mg/mL", Ped: "Ped Dose: Torsades: Magnesium Sulfate 50% 50 mg/kg IV Delivered over 20 min", pic: "MagSulf.jpg", pedMult: 50, pedmg: 'mg' },
    { Name: "Solu-Medrol", Indication: "Indication: Allergic Reaction/Anaphylaxis, Reactive Airway Disease", Adult: "Adult Dose: Solu-Medrol 125 mg slow IV or IM", Ped: "Ped Dose: Solu-Medrol 2 mg/kg slow IV or IM" , pedMult: 2, pedmg: 'mg'},
    { Name: "Midazolam(Versed)", Indication: "Indication: Actively seizing or in status epilepticus", Adult: "Adult Dose: 2.5mg IV/IO or 5mg IM/IN", Ped: "Ped Dose: 0.15 mg/kg IV/IO/IM/IN, up to 2.5mg, max of 5mg" , pedMult: .15, pedmg: 'mg'},
    { Name: "Naloxone(Narcan)", Indication: "Indication: Narcotic Overdose", Adult: "IV or IO 0.1 mg/kg - Max Dose 2 mg", Ped: "Ped Dose: IV or IO 0.1 mg/kg - Max Dose 2 mg" , pedMult: .1, pedmg: 'mg, max is 2mg'},
    { Name: "Nitroglycerin", Indication: "Indication: Symptomatic (poor perfusion) narrow complex tachycardia w/ pulse", Adult: "Adult Dose: 6mg Rapid Push", Ped: "Ped Dose: no protocols" },
    { Name: "Ondansetron(Zofran)", Indication: "Indication: Symptomatic (poor perfusion) narrow complex tachycardia w/ pulse", Adult: "Adult Dose: 6mg Rapid Push", Ped: "Ped Dose: .1mg/kg up to 6mg" , pic: "Zofran.jpg", pedMult: .1, pedmg: 'mg'},
    { Name: "Oral Glucose", Indication: "Indication: Symptomatic (poor perfusion) narrow complex tachycardia w/ pulse", Adult: "Adult Dose: 6mg Rapid Push", Ped: "Ped Dose: .1mg/kg up to 6mg" , pedMult: .1, pedmg: 'mg'},
    { Name: "Sodium Bicarbonate", Indication: "Indication: Overdose, Hyperkalemic Arrest, Neonatal Resuscitation (OLMC), Burns, Crush Injuries", Adult: "Adult Dose: 1 mEq/kg IV", Ped: "Ped Dose: 1 mEq/kg IV" , pedMult: .1, pedmg: 'mg'},
]

let drugs = []

deleteBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(e.target === (deleteBtn)) {
        drugForm.children[3].remove()
        console.log(e.target)
    }
})
wgtButton.addEventListener('click', handleDrugSubmit)

 function handleDrugSubmit(e) {
    console.log(e.target)
    e.preventDefault()
    const searchString = searchBar.value.toLowerCase()
    drugObject.filter((drug) => {
        if (drug.Name.toLowerCase().includes(searchString)){
            const pedP = document.createElement("p")
            pedP.innerHTML = `Pediatric Dose for ${wgtInput.value}lbs is ${((drug.pedMult)*wgtInput.value)/2.2}${drug.pedmg} `
            drugForm.appendChild(pedP)
            pedP.classList.add('pedP')}
})
 }
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase()
    //console.log(searchString)
    const drugFilter = drugObject.filter((drug) => {
        return (
            drug.Name.toLowerCase().includes(searchString)
        )
    })
    displayDrugs(drugFilter)
    
})

function displayDrugs(drugObject) {
    drugs = 
drugObject.map((drug) => {
   
   return `
     <div class="drug"
         <h2 class = "dName" >${drug.Name} <img src=${drug.pic}></img></h2>
         <p>${drug.Indication}
         <p>${drug.Adult}
         <p class= "dose">${drug.Ped} 
     `
    })
      .join('')
     drugsList.innerHTML = drugs
}

    




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

