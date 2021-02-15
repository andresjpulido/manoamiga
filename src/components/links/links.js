import React, { useEffect, useState } from 'react';
import './links.css'

const Links = () => {

    const [linkList, setLinkList] = useState(null);
    const url = '/data/links.json';

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

    return (
        <article className="links">
            <h3>Enlaces de Inter&eacute;s</h3>

            {
                linkList.map((item, index) => {
                    return (
                        <div key={index}>
                            <a target="_blank" href={item.target}>
                                <img src={process.env.PUBLIC_URL + `/images/banners/${item.name}`} alt={item.title} />
                            </a>
                        </div>
                    )
                })
            }

        </article>

    )
}

export default Links;