import { Modal } from "./modal.js"
import { alertError } from "./alert-error.js";
import * as utils from './utils.js';
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')



form.onsubmit = event => {
    event.preventDefault()

    const height = inputHeight.value
    const weight = inputWeight.value

    const showAlertError = utils.notNumber(weight) || utils.notNumber(height)
    
    if ( showAlertError){
        alertError.open()
        return
    }
    alertError.close()
    const result = utils.IMC(weight,height)
    Modal.message.innerText = `Sei IMC é de  ${result}`

    Modal.open()
}

// evento executado toda vez que o input for alterado
inputWeight.oninput = () => alertError.close()
inputHeight.oninput = () => alertError.close()
