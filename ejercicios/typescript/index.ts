console.log('Hello TypeScript')

function add(a: number, b: number){
    return a + b
}

const sum = add(2, 3)
console.log(sum)


//Tipos de datos*******************************

//Boleanos
let muted:boolean = true
muted = false
//muted = 'Hola'

//Numeros
let numerador:number = 42
let denominador:number = 6
let resultado = numerador / denominador

let nombre: string = 'Richard'
let saludo = `me llamo ${nombre}`

//Arreglos
let people:string [] = []
people = ['isabel', 'marisol', 'asael']
people.push('Carlos')

let peopleAndNumbers: Array< string | number > = []
peopleAndNumbers.push('Asael')
peopleAndNumbers.push(6)

//Enum*******************************************
enum Color {
    Rojo, 
    Verde,
    Azul
}
enum Color2 {
    Rojo = 'Rojo', 
    Verde = 'Verde',
    Azul = 'Azul'
}

let colorFavorito: Color = Color.Verde
let colorFavorito2: Color2 = Color2.Verde
console.log(`Mi color favorito es ${colorFavorito}`)
console.log(`Mi color favorito es ${colorFavorito2}`)


//Any*******************************************
let comodin: any = 'Joker'
comodin = {type: 'Wildcard'}
comodin = 'study'

//Object
let someObject: object = {type: 'Wildcard'}



//Funciones ***********************************
function add1(a: number, b: number): number{
    return a + b
}

const sum1 = add1(4, 5)

//Valor de regreso de una funcion ***********************
//Asi se define como sera retornada la funcion
function createAdder(a: number): (number) => number{
    return function (b:number){
        return a + b
    }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)

//Parametros opcionales y valor por omision
function fullName(firstName?: string, lastName: string = 'Lara' ):string{
    return `${firstName} ${lastName}`
}
const richard = fullName('Richard')




//Interfaces *****************************
enum Color2 {
    Rojo1 = 'Rojo',
    Verde1 = 'Verde'
}
interface Rectangulo{
    ancho: number
    alto: number,
    color?: Color2 //Atributo opcional
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 3,
    color: Color2.Rojo1
}

function area(r:Rectangulo):number{
    return r.alto * r.alto
}

const areaReact = area(rect)
rect.toString = function(){
    return this.color ? 
    `Un rectangulo ${this.color}`
    :`Un rectangulo` 
}
console.log(rect.toString())


