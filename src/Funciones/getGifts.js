export const getGifts = async (category) => {
    const apiKey = "9Wn4MiJc78rjNunkLcyJFB1iLJWFCRgI";
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=2&offset=0&rating=g&lang=en`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}