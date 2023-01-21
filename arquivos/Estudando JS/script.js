var ida = 22
console.log(`Você tem ${ida} anos`)
if(ida < 16){
    console.log('Não vota')
}else if (ida < 18 || ida > 65){
     console.log('Voto opcional')  
} else{
    console.log('Voto obrigatório')
}