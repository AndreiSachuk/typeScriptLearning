const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = "Hello World"

const numberArray: number[] = [1,2,3]
const numberArray2: Array<number> = [1,2,3]

const words: string[] = ['Hello', 'TypeScript']

//Typle
const contact: [string, number] = ['Andrei', 123456789]

//Any

let variab: any = 42
variab = []

//function

function sayMyName(name:string):void {
    console.log(name);
}

sayMyName("Andrei")

//Never
function throwError(message: string) : never{
    throw new Error(message)
}

function infiniti() : never{
    while (true){}
}

//Type
type Login  = string

const login: Login = 'admin'

type ID = string|number
const id1: ID=1
const id2: ID="123456"

type someType = string | null | undefined
