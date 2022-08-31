import { useState } from "react"
//Creando un custum hook para contador
export const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue)
    //Especificando el valor como argumento, puedo establecer en el componente el numero
    //q quiero que sume el contador, por ejemplo de 2 en 2
    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        if (counter == 0) return;
        setCounter(counter - 1);
    }

    const restart = () => {
        setCounter(initialValue)
    }

    //Si lo devolvemos como obj , despues lo tenemos q desestructurar
    //de la misma manera
    return {
        counter,
        increment,
        decrement,
        restart
    }
}