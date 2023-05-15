import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GrifGrid } from "./GiftGrid";


export function App() {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    //La siguiente linea comprueba si la categoría ya se encuentra en categories, y si es así realiza un return para terminar la ejecución de la función
    if (categories.includes(newCategory)) return;
    setCategories([newCategory,...categories]);
  };


  
  return (
    //Se realiza el uso del props cambioCategoria, donde se pasa como función setCategories
    <>
      <h1>Hola a todos, probando</h1>
      <AddCategory cambioCategoria= {value => onAddCategory(value)}/>
      <ol>
        {categories.map((category) => {
          return <GrifGrid key={category} category={category}/>;
        })}
      </ol>
    </>
  );
}

