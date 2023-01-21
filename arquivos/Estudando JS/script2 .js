var agora = new Date()
var Hora = agora.getHours()
console.log(`Agora são extamente ${Hora} horas.`)
if (Hora < 6){
    console.log('Boa madrugada!')
}else if(Hora < 12){
    console.log('Bom dia!')
}else if(Hora <= 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}