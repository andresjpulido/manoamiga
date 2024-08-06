import React, { useState, useEffect } from 'react';
import './gallery.css';
import { useHistory } from "react-router-dom";

const Gallery = () => {

    const [gallery, setGallery] = useState(null);
    const url = "/data/gallery.json";
    let history = useHistory()

    useEffect(() => {

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


    }, [])

    if (!gallery) {
        return (
            <div>Loading ...</div>
        );
    }

    const showAlbum = (idgallery, idevent) => {
        history.push("/album/" + idgallery + "/" + idevent);
    }

    return (
        <section>
            <h1>EVENTOS</h1>
            {
                gallery.map((galleryItem, galleryindex) => {
                    return (
                        <article className="gallery" key={galleryindex}>
                            <div className="pic">
                                <img src={process.env.PUBLIC_URL + `/images/gallery/${galleryItem.image.src}`} loading="lazy" decoding="async" alt={galleryItem.image.title} />
                            </div>
                            <div className="description">
                                <span className="meta">{galleryItem.date}</span>
                                <div className="gallery-title">{galleryItem.name}</div>
                                <ul>
                                    {
                                        galleryItem.events.map((item, eventindex) => {
                                            return (
                                                <li key={eventindex} onClick={() => showAlbum(galleryindex, eventindex)} className="gallery-item">
                                                    <div>{item.name}</div>
                                                </li>
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