export function IMC(weight,height){
    return (weight/((height /100) ** 2)).toFixed(2)
}

export function notNumber(value){
    //retorna true caso não seja um numero
    return isNaN(value) || value == ""
}