import { useState } from "react";
/*Este custom hook tiene la funcionalidad de: acceder a los datos del input y cambiarlos
tambien tiene la funcion de resetear el formulario*/

export const UseForm = (initialForm = {}) => {
    //Le pasamos un parametro sin definir para que las caracteristicas las definamos en el
    //componente
    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }


    return {
        ...formState,
        onInputChange,
        formState,
        onResetForm
    }


}