class Calculadora {
    sumar(num1, num2){
        return num1 + num2
    }

    restar(num1, num2){
        return num1 - num2
    }

    dividir(num1, num2){
        if (num2!== 0){
            return num1 / num2
        }
        return "Infinty"
    }

    multiplicar(num1, num2){
        return num1 * num2
    }
}