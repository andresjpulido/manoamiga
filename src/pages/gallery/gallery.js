import React, {useState, useEffect} from 'react';
import './gallery.css';

const Gallery = ()=>{

    const [gallery, setGallery] = useState(null);
    const url = "/data/gallery.json";

    useEffect(()=>{

        fetchGalleries();

        async function fetchGalleries() {
            const res = await fetch(url).catch((error) => {
                setGallery({ error: { code: "net", message: "ERR_NAME_NOT_RESOLVED" } })
            });

            if (res) {
                const data = await res.json();
                setGallery(data);
            }
        }   


    },[])

    if (!gallery) {
        return (
            <div>Loading ...</div>
        );
    }

    return (
        <section>
            <h2>GALERIA</h2>
            {
                gallery.map((galleryItem, index)=>{
                    return (
                        <article className="gallery" key={index}>
                            <div class="pic">
                                <img src={process.env.PUBLIC_URL + `/images/gallery/${galleryItem.image.src}`} alt={galleryItem.image.title}   />
                            </div>
                            <div>
                                <span>{galleryItem.date}</span>
                                <h1>{galleryItem.name}</h1> 
                                <ul>
                                {
                                    galleryItem.events.map((item, index)=>{
                                        return (
                                            <li key={index}>{item.name}</li>
                                        )
                                    })
                                }
                                </ul>
                            </div>
                        </article>
                    )
                })
            }
        </section>
    )
}

export default Gallery;