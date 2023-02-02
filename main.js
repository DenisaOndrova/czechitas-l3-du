// tady je místo pro náš program
let jmenoPrijmeniUzivatele = document.querySelector('.jmenoPrijmeni')
let vyplneneJmeno = prompt('Vyplňte Vaše jméno a příjmení:')

jmenoPrijmeniUzivatele.innerHTML = vyplneneJmeno

let narozeni = document.querySelector('.rokNarozeni')
let vyplnenyRok = Number(prompt('Vyplňte Váš rok narození:'))
let soucasnyRok = 2023

narozeni.innerHTML = soucasnyRok - vyplnenyRok

function obarveni(){
    let barva = prompt('Jak se Vaše oblíbená barva řekne anglicky?')
   
}


