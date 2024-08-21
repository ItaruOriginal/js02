const nota01 = document.querySelector ('#nota_1')
const nota02 = document.querySelector ('#nota_2')
const nota03 =document.querySelector ('#nota_3')
const btn =document.querySelector ('#button')
 const nt1 = 1
 const nt2 = 2
 const nt3 = 3

 let media = 0

btn.addEventListener('click', () => {
    if(nota01.value > 0 & nota01.value < 10 & nota02.value > 0 & nota02.value < 10 & nota03.value > 0 & nota03.value <10){
        media = ((nota01.value * nt1) + (nota02.value * nt2) + (nota03.value * nt3)) / (nt1 + nt2 + nt3)
    
        console.log(`A média é: ${media.toFixed(2)}`)
    }else{
        console.log('invalido. Digite suas notas entre 0 até 10')
    }})
