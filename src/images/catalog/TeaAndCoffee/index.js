import blackTea from './blackTea.png'
import coffeeDrinks from './coffeeDrinks.png'
import greenTea from './greenTea.png'
import herbalTea from './herbalTea.png'
import matcha from './matcha.png'
import milkOolong from './milkOolong.png'
import puer from './puer.png'

const funk = (text) => {
    switch (text) {
        case 'blackTea':
            return blackTea
        case 'coffeeDrinks':
            return coffeeDrinks
        case 'greenTea':
            return greenTea
        case 'herbalTea':
            return herbalTea
        case 'matcha':
            return matcha
        case 'milkOolong':
            return milkOolong
        case 'puer':
            return puer
        default:
            return null
    }
}

export default funk