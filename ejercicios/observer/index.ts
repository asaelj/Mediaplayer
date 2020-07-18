interface Observer{
    update: (data: any)=> void
}

interface Subject {
    suscribe: (observer: Observer) => void,
    unsuscribe: (observer: Observer) => void
}

class BitcoinPrice implements Subject{
    observers: Observer[] = []

    constructor(){
        const el : HTMLInputElement = document.querySelector('#value')
        el.addEventListener('input', () =>{
            this.notify(el.value)
        })
    }

    suscribe(observer: Observer){
        this.observers.push(observer)
    }

    unsuscribe(observer: Observer){
        const index = this.observers.findIndex(obs => {
            return obs === observer
        })
        this.observers.splice(index, 1) //Elimina elemento a partir del index y la cantidad que se le indique
    }

    notify(data: any){
        this.observers.forEach(observer => observer.update(data))
    }
}
//*********************************** */
class PriceDisplay implements Observer{
    private el: HTMLElement

    constructor(){
        this.el = document.querySelector('#price')        
    }

    update(data: any){
        this.el.innerText = data
    }
}




//***************************
const value = new BitcoinPrice() //Subject
const display = new PriceDisplay() //Observer
value.suscribe(display)
setTimeout(() => value.unsuscribe(display), 20 * 1000 )

