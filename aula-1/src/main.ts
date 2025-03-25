// let alfabeto = "abcdefghijklmnopqrstuvwxyz"
// let palavra = "acerolaz"

// for(let letra of palavra) {
//     let posicao = alfabeto.indexOf(letra)
//     let cifrado = alfabeto[(posicao + 1) % alfabeto.length]
//     console.log(`[${posicao}]`, letra, '-->', cifrado)
// }

// Random Numbers

function randomNumbers(x: number, y: number, z: number) {
    let arr: number[] = []
    
    while(arr.length < x) {
        let newNumber: number = Math.ceil(Math.random() * z)

        if(!(newNumber < y || newNumber > z)) {
            arr.push(newNumber)
        } 
    }

    console.log(arr)
}

randomNumbers(100, 1, 1000)