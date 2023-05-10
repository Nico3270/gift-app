import { useState } from "react"

//setCategories es un props de AddCategory
export const AddCategory = ({cambioCategoria}) => {
    const [inputValue, setInputValue] = useState("")
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();//previene la acción predeterminada del formulario, que es enviar los datos al servidor y actualizar la página. 
        if (inputValue.trim().length <= 1) return; ///Esta linea hace que se salga de la función si el input se encuentra vacío
        cambioCategoria(inputValue.trim());
        setInputValue("");
    }
    return (
        <form onSubmit = {(event)=> onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar gifts"
                value={inputValue}
                onChange={onInputChange}>
            </input>
        </form>
    )
}