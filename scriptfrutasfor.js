const fruits = [
    "fresa", "pera", "granada", "uva", "fresa", "frambuesa", "kiwi", "frambuesa", "frambuesa", "uva", "manzana", "fresa", "fresa", "mandarina", "pera", "uva", "pera", "fresa", "manzana", "platano", "manzana", "arandano", "durazno", "lima", "frambuesa", "uva", "frambuesa", "frambuesa", "arandano", "lima", "naranja", "pera", "fresa", "fresa", "naranja", "fresa", "uva", "naranja", "manzana", "frambuesa", "fresa", "manzana", "kiwi", "mandarina", "platano", "durazno", "frambuesa", "arandano", "platano", "durazno", "naranja", "pera", "lima", "fresa", "naranja", "fresa", "pera", "granada", "fresa", "frambuesa", "platano", "frambuesa", "frambuesa", "frambuesa", "frambuesa", "papaya", "platano", "fresa", "fresa", "lima", "melon", "papaya", "melon", "mango", "fresa", "cereza", "lima", "platano", "pera", "arandano", "mandarina", "papaya", "mandarina", "naranja", "kiwi", "melon", "manzana", "melon", "naranja", "manzana", "platano", "cereza", "naranja", "frambuesa", "cereza", "kiwi", "kiwi", "durazno", "pera", "pera", "coco", "manzana", "mandarina", "mandarina", "granada", "mandarina", "arandano", "platano", "sandia", "arandano", "uva", "pera", "mango", "manzana", "arandano", "cereza", "arandano", "platano", "platano", "manzana", "uva", "mango", "uva", "uva", "uva", "papaya", "frambuesa", "arandano", "pera", "lima", "frambuesa", "durazno", "melon", "uva", "lima", "mandarina", "kiwi", "mandarina", "cereza", "uva", "mandarina", "cereza", "lima", "cereza", "frambuesa", "frambuesa", "arandano", "lima", "lima", "arandano", "kiwi", "kiwi", "mango", "arandano", "cereza", "mango", "mango", "arandano", "mandarina", "uva", "mandarina", "arandano", "coco", "cereza", "uva", "mandarina", "lima", "mandarina", "uva", "mandarina", "uva", "uva", "sandia", "lima", "lima", "kiwi", "piña", "mandarina", "piña", "mango", "sandia", "cereza", "cereza", "uva", "uva", "cereza", "uva", "melon"
]

// Frutas con ciclo "For" con objeto.
// Segunda solución. Menos código
console.log('FRUTAS CON CICLO "FOR" CON OBJETO. SEGUNDO SOLUCIÓN. MENOS CÓDIGO')
const fruitsobject2 = {}
//Comenzar con objeto vacío
for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i]
    // Se crea una variable de fruta individual, que con cada iteración toma el valor de la fruta de esa iteración
    fruitsobject2[fruit] = (fruitsobject2[fruit] || 0) + 1;
    // fruitsobject2[fruit] será la propiedad en el objeto con el nombre de la fruta actual de esa iteración
    // (fruitsobject2[fruit] || 0) + 1 valida si ya existe la propiedad. Si ya existe usa su valor actual. Si no, usa cero, más 1
}
console.log(`Tienes un total de ${fruits.length} frutas.`)
console.log(fruitsobject2)

// Frutas con ciclo "For" con objeto.
// Primer solución. Más código
console.log('FRUTAS CON CICLO "FOR" CON OBJETO. PRIMER SOLUCIÓN. MÁS CÓDIGO')
const fruitsobject = {
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
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "manzana") {
        fruitsobject.manzana++
    }
    if (fruits[i] === "platano") {
        fruitsobject.platano++
    }
    if (fruits[i] === "fresa") {
        fruitsobject.fresa++
    }
    if (fruits[i] === "naranja") {
        fruitsobject.naranja++
    }
    if (fruits[i] === "uva") {
        fruitsobject.uva++
    }
    if (fruits[i] === "piña") {
        fruitsobject.piña++
    }
    if (fruits[i] === "sandia") {
        fruitsobject.sandia++
    }
    if (fruits[i] === "mango") {
        fruitsobject.mango++
    }
    if (fruits[i] === "cereza") {
        fruitsobject.cereza++
    }
    if (fruits[i] === "kiwi") {
        fruitsobject.kiwi++
    }
    if (fruits[i] === "papaya") {
        fruitsobject.papaya++
    }
    if (fruits[i] === "pera") {
        fruitsobject.pera++
    }
    if (fruits[i] === "melon") {
        fruitsobject.melon++
    }
    if (fruits[i] === "durazno") {
        fruitsobject.durazno++
    }
    if (fruits[i] === "granada") {
        fruitsobject.granada++
    }
    if (fruits[i] === "frambuesa") {
        fruitsobject.frambuesa++
    }
    if (fruits[i] === "arandano") {
        fruitsobject.arandano++
    }
    if (fruits[i] === "lima") {
        fruitsobject.lima++
    }
    if (fruits[i] === "coco") {
        fruitsobject.coco++
    }
    if (fruits[i] === "mandarina") {
        fruitsobject.mandarina++
    }
}
console.log(`Tienes un total de ${fruits.length} frutas.`)
console.log(fruitsobject)

// Frutas con ciclo "For" sin objeto
// Primer solución. Más código
console.log('FRUTAS CON CICLO "FOR" SIN OBJETO. PRIMER SOLUCIÓN. MÁS CÓDIGO')
let manzanatotal = 0;
let platanototal = 0;
let fresatotal = 0;
let naranjatotal = 0;
let uvatotal = 0;
let piñatotal = 0;
let sandiatotal = 0;
let mangototal = 0;
let cerezatotal = 0;
let kiwitotal = 0;
let papayatotal = 0;
let peratotal = 0;
let melontotal = 0;
let duraznototal = 0;
let granadatotal = 0;
let frambuesatotal = 0;
let arandanototal = 0;
let limatotal = 0;
let cocototal = 0;
let mandarinatotal = 0;
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "manzana") {
        manzanatotal += 1
    }
    if (fruits[i] === "platano") {
        platanototal += 1
    }
    if (fruits[i] === "fresa") {
        fresatotal += 1
    }
    if (fruits[i] === "naranja") {
        naranjatotal += 1
    }
    if (fruits[i] === "uva") {
        uvatotal += 1
    }
    if (fruits[i] === "piña") {
        piñatotal += 1
    }
    if (fruits[i] === "sandia") {
        sandiatotal += 1
    }
    if (fruits[i] === "mango") {
        mangototal += 1
    }
    if (fruits[i] === "cereza") {
        cerezatotal += 1
    }
    if (fruits[i] === "kiwi") {
        kiwitotal += 1
    }
    if (fruits[i] === "papaya") {
        papayatotal += 1
    }
    if (fruits[i] === "pera") {
        peratotal += 1
    }
    if (fruits[i] === "melon") {
        melontotal += 1
    }
    if (fruits[i] === "durazno") {
        duraznototal += 1
    }
    if (fruits[i] === "granada") {
        granadatotal += 1
    }
    if (fruits[i] === "frambuesa") {
        frambuesatotal += 1
    }
    if (fruits[i] === "arandano") {
        arandanototal += 1
    }
    if (fruits[i] === "lima") {
        limatotal += 1
    }
    if (fruits[i] === "coco") {
        cocototal += 1
    }
    if (fruits[i] === "mandarina") {
        mandarinatotal += 1
    }
}
console.log(`Tienes un total de ${fruits.length} frutas.`)
console.log(
    `Tienes las siguientes frutas:
    ${manzanatotal} manzanas.
    ${platanototal} plátanos.
    ${fresatotal} fresas.
    ${naranjatotal} naranjas.
    ${uvatotal} uvas.
    ${piñatotal} piñas.
    ${sandiatotal} sandías.
    ${mangototal} mangos.
    ${cerezatotal} cerezas.
    ${kiwitotal} kiwis.
    ${papayatotal} papayas.
    ${peratotal} peras.
    ${melontotal} melones.
    ${duraznototal} duraznos.
    ${granadatotal} granadas.
    ${frambuesatotal} frambuesas.
    ${arandanototal} arándanos.
    ${limatotal} limas.
    ${cocototal} cocos.
    ${mandarinatotal} mandarinas.`
)