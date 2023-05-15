import { useEffect, useState } from "react";
import { getGifts } from "../Funciones/getGifts";


export const useFetchGifts = (category) => {
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifts(category);
        setImages(newImages)
    }
    console.log(images);
    
    useEffect(() => {
        getImages()
    }, [])
    return {
        images,
        isLoading: true
    }
}

