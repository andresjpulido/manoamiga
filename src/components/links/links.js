import React, { useEffect, useState } from 'react';
import './links.css'
import { useHistory } from "react-router-dom";

const Links = () => {

    const [linkList, setLinkList] = useState(null);
    const url = '/data/links.json';
    let history = useHistory()

    useEffect(() => {

        fetchLinks();

        async function fetchLinks() {
            const res = await fetch(url).catch((error) => {
                setLinkList({ error: { code: "net", message: "ERR_NAME_NOT_RESOLVED" } })
            });

            if (res) {
                const data = await res.json();
                setLinkList(data);
            }
        }

    }, []);

    if (!linkList) {
        return (
            <div>Loading ...</div>
        );
    }

    const goPage = (page)=>{        
        history.push("/"+page);
    }

    return (
        <article className="links">
            <h3>Enlaces de Inter&eacute;s</h3>

            {
                linkList.filter(item => item.active).map((item, index) => {
                    if (item.internal) {
                        return (
                            <div key={index} className="link">
                                <div onClick={() => goPage(`${item.target}`)}>
                                    <img src={process.env.PUBLIC_URL + `/images/banners/${item.name}`} alt={item.title} className="link-image" />
                                    </div>
                            </div>
                        )
                    } else {
                        return (
                            <div key={index}>
                                <a target="_blank" href={item.target}>
                                    <img src={process.env.PUBLIC_URL + `/images/banners/${item.name}`} alt={item.title} className="link-image" />
                                </a>
                            </div>
                        )
                    }
                })
            }

        </article>

    )
}

export default Links;