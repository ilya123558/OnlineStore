import bg from './bg.png'
import cup from './cup.png'
import coffee from './coffee.png'

export default function roastedСoffeeImg(text) {
    switch (text) {
        case 'bg':
            return bg
        case 'cup':
            return cup
        default:
            return coffee
    }
}