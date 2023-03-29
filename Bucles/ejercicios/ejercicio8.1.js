//un zoologico prtende determinar el porcentaje de animales que hay en las siguientes 3 categorias de edades : 0 a 1 año, de mas de 1 año y menos de 3 y de 3 o mas años. el zoologico todabia no esta seguro del animal que estudiara. si se decide por elefantes solo tomara una muestra de 20 de ellos; si se decide por las jirafas, tomara 15 muestras y si se decide por los chimpances tomara 40.
var edadElefante
var edadTotalElefante = Number
edadTotal = 0

var animal = prompt("Ingrese nombre de animal a estudiar")
while ( animal != "elefante" && animal != "jirafa" && animal != "chimpance"){
    alert("Ingrese valor valido")
    var animal = prompt("Ingrese nombre de animal a estudiar")
}if (animal === "elefante"){
    for (var i = 1 ; i <= 3; i++){
    edadElefante = Number(prompt ("Muestra"+ i +"Ingrese edad"))
    edadTotal += edadElefante}
}else if (animal === "jirafa"){
    for (var i = 1 ; i <= 4; i++)
    edadjirafa = Number(prompt ("Muestra"+ i +"Ingrese edad"))

}else {
    for (var i = 1 ; i <= 5; i++)
    edadChimpance = Number(prompt ("Muestra"+ i +"Ingrese edad"))
}


