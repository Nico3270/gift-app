import { getGifts } from "../Funciones/getGifts";
import { useEffect, useState } from "react";
import { GiftItem } from "./GiftItem";



export const GrifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifts(category);
        setImages(newImages)
    }
    console.log(images);
    
    useEffect(() => {
        getImages()
    }, [])

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
              {
                images.map( image => (
                    <GiftItem key ={image.id} {...image}></GiftItem>
                ))
              }
            </div>
        </>
    )
}