interface Rect{
    readonly id:string
    color?: string
    size:  {
        width: number
        heigh: number
    }
}

const rect1: Rect = {
    id: "1234",
    size:{
        width:20,
        heigh:30
    },
    color: '#fff'
}

const rect2: Rect={
    id:"12",
    size:{
        width:20,
        heigh:80,
    },
}

rect2.color = 'black'

const rect3 = {} as Rect

//===================

interface RectWithArea extends  Rect{
    getArea: () => number
}

const rect4: RectWithArea = {
    id: "123",
    size:{
        width:180,
        heigh:80
    },
    getArea():number{
        return this.size.width*this.size.heigh
    }
}


//=============================
interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock{
    time: Date = new Date()
    setTime(date: Date):void {
        this.time = date
    }

}


//====================
interface IStyles  {
    [key: string]: string
}


const css: IStyles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}














