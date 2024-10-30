const whileFruits = [
    "fresa", "pera", "granada", "uva", "fresa", "frambuesa", "kiwi", "frambuesa", "frambuesa", "uva", "manzana", "fresa", "fresa", "mandarina", "pera", "uva", "pera", "fresa", "manzana", "platano", "manzana", "arandano", "durazno", "lima", "frambuesa", "uva", "frambuesa", "frambuesa", "arandano", "lima", "naranja", "pera", "fresa", "fresa", "naranja", "fresa", "uva", "naranja", "manzana", "frambuesa", "fresa", "manzana", "kiwi", "mandarina", "platano", "durazno", "frambuesa", "arandano", "platano", "durazno", "naranja", "pera", "lima", "fresa", "naranja", "fresa", "pera", "granada", "fresa", "frambuesa", "platano", "frambuesa", "frambuesa", "frambuesa", "frambuesa", "papaya", "platano", "fresa", "fresa", "lima", "melon", "papaya", "melon", "mango", "fresa", "cereza", "lima", "platano", "pera", "arandano", "mandarina", "papaya", "mandarina", "naranja", "kiwi", "melon", "manzana", "melon", "naranja", "manzana", "platano", "cereza", "naranja", "frambuesa", "cereza", "kiwi", "kiwi", "durazno", "pera", "pera", "coco", "manzana", "mandarina", "mandarina", "granada", "mandarina", "arandano", "platano", "sandia", "arandano", "uva", "pera", "mango", "manzana", "arandano", "cereza", "arandano", "platano", "platano", "manzana", "uva", "mango", "uva", "uva", "uva", "papaya", "frambuesa", "arandano", "pera", "lima", "frambuesa", "durazno", "melon", "uva", "lima", "mandarina", "kiwi", "mandarina", "cereza", "uva", "mandarina", "cereza", "lima", "cereza", "frambuesa", "frambuesa", "arandano", "lima", "lima", "arandano", "kiwi", "kiwi", "mango", "arandano", "cereza", "mango", "mango", "arandano", "mandarina", "uva", "mandarina", "arandano", "coco", "cereza", "uva", "mandarina", "lima", "mandarina", "uva", "mandarina", "uva", "uva", "sandia", "lima", "lima", "kiwi", "piña", "mandarina", "piña", "mango", "sandia", "cereza", "cereza", "uva", "uva", "cereza", "uva", "melon"
]

// Frutas con ciclo "While" con objeto
console.log('FRUTAS CON CICLO "WHILE" CON OBJETO')
const whilefruitsobject = {
    manzana: 0,
    platano: 0,
    fresa: 0,
    naranja: 0,
    uva: 0,
    piña: 0,
    sandia: 0,
    mango: 0,
    cereza: 0,
    kiwi: 0,
    papaya: 0,
    pera: 0,
    melon: 0,
    durazno: 0,
    granada: 0,
    frambuesa: 0,
    arandano: 0,
    lima: 0,
    coco: 0,
    mandarina: 0,
}
let counter1 = 0; // esta variable tiene un valor con número cero
while (counter1 < whileFruits.length) {
    if (whileFruits[counter1] === "manzana") { //entre corchetes la variable counter que simboliza el número que quiero validar en la posición del array
        whilefruitsobject.manzana++
    }
    if (whileFruits[counter1] === "platano") {
        whilefruitsobject.platano++
    }
    if (whileFruits[counter1] === "fresa") {
        whilefruitsobject.fresa++
    }
    if (whileFruits[counter1] === "naranja") {
        whilefruitsobject.naranja++
    }
    if (whileFruits[counter1] === "uva") {
        whilefruitsobject.uva++
    }
    if (whileFruits[counter1] === "piña") {
        whilefruitsobject.piña++
    }
    if (whileFruits[counter1] === "sandia") {
        whilefruitsobject.sandia++
    }
    if (whileFruits[counter1] === "mango") {
        whilefruitsobject.mango++
    }
    if (whileFruits[counter1] === "cereza") {
        whilefruitsobject.cereza++
    }
    if (whileFruits[counter1] === "kiwi") {
        whilefruitsobject.kiwi++
    }
    if (whileFruits[counter1] === "papaya") {
        whilefruitsobject.papaya++
    }
    if (whileFruits[counter1] === "pera") {
        whilefruitsobject.pera++
    }
    if (whileFruits[counter1] === "melon") {
        whilefruitsobject.melon++
    }
    if (whileFruits[counter1] === "durazno") {
        whilefruitsobject.durazno++
    }
    if (whileFruits[counter1] === "granada") {
        whilefruitsobject.granada++
    }
    if (whileFruits[counter1] === "frambuesa") {
        whilefruitsobject.frambuesa++
    }
    if (whileFruits[counter1] === "arandano") {
        whilefruitsobject.arandano++
    }
    if (whileFruits[counter1] === "lima") {
        whilefruitsobject.lima++
    }
    if (whileFruits[counter1] === "coco") {
        whilefruitsobject.coco++
    }
    if (whileFruits[counter1] === "mandarina") {
        whilefruitsobject.mandarina++
    }
    counter1++;
}
console.log(`Tienes un total de ${whileFruits.length} frutas.`)
console.log(whilefruitsobject)

// Frutas con ciclo "While" sin objeto
console.log('FRUTAS CON CICLO "WHILE" SIN OBJETO')
let wmanzanatotal = 0;
let wplatanototal = 0;
let wfresatotal = 0;
let wnaranjatotal = 0;
let wuvatotal = 0;
let wpiñatotal = 0;
let wsandiatotal = 0;
let wmangototal = 0;
let wcerezatotal = 0;
let wkiwitotal = 0;
let wpapayatotal = 0;
let wperatotal = 0;
let wmelontotal = 0;
let wduraznototal = 0;
let wgranadatotal = 0;
let wframbuesatotal = 0;
let warandanototal = 0;
let wlimatotal = 0;
let wcocototal = 0;
let wmandarinatotal = 0;
let counter2 = 0; // esta variable tiene un valor con número cero
while (counter2 < whileFruits.length) {
    if (whileFruits[counter2] === "manzana") { //entre corchetes la variable counter que simboliza el número que quiero validar en la posición del array
        wmanzanatotal += 1
    }    
    if (whileFruits[counter2] === "platano") {
        wplatanototal += 1
    }
    if (whileFruits[counter2] === "fresa") {
        wfresatotal += 1
    }
    if (whileFruits[counter2] === "naranja") {
        wnaranjatotal += 1
    }
    if (whileFruits[counter2] === "uva") {
        wuvatotal += 1
    }
    if (whileFruits[counter2] === "piña") {
        wpiñatotal += 1
    }
    if (whileFruits[counter2] === "sandia") {
        wsandiatotal += 1
    }
    if (whileFruits[counter2] === "mango") {
        wmangototal += 1
    }
    if (whileFruits[counter2] === "cereza") {
        wcerezatotal += 1
    }
    if (whileFruits[counter2] === "kiwi") {
        wkiwitotal += 1
    }
    if (whileFruits[counter2] === "papaya") {
        wpapayatotal += 1
    }
    if (whileFruits[counter2] === "pera") {
        wperatotal += 1
    }
    if (whileFruits[counter2] === "melon") {
        wmelontotal += 1
    }
    if (whileFruits[counter2] === "durazno") {
        wduraznototal += 1
    }
    if (whileFruits[counter2] === "granada") {
        wgranadatotal += 1
    }
    if (whileFruits[counter2] === "frambuesa") {
        wframbuesatotal += 1
    }
    if (whileFruits[counter2] === "arandano") {
        warandanototal += 1
    }
    if (whileFruits[counter2] === "lima") {
        wlimatotal += 1
    }
    if (whileFruits[counter2] === "coco") {
        wcocototal += 1
    }
    if (whileFruits[counter2] === "mandarina") {
        wmandarinatotal += 1
    }
    counter2++;
}
console.log(`Tienes un total de ${whileFruits.length} frutas.`)
console.log(
    `Tienes las siguientes frutas:
    ${wmanzanatotal} manzanas.
    ${wplatanototal} plátanos.
    ${wfresatotal} fresas.
    ${wnaranjatotal} naranjas.
    ${wuvatotal} uvas.
    ${wpiñatotal} piñas.
    ${wsandiatotal} sandías.
    ${wmangototal} mangos.
    ${wcerezatotal} cerezas.
    ${wkiwitotal} kiwis.
    ${wpapayatotal} papayas.
    ${wperatotal} peras.
    ${wmelontotal} melones.
    ${wduraznototal} duraznos.
    ${wgranadatotal} granadas.
    ${wframbuesatotal} frambuesas.
    ${warandanototal} arándanos.
    ${wlimatotal} limas.
    ${wcocototal} cocos.
    ${wmandarinatotal} mandarinas.`
)

