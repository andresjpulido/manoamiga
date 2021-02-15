import React, { useEffect, useState } from 'react';
import './directive.css'

const Directive = () => {

    const [directives, setDirectives] = useState(null);
    const url = "/data/directives.json"

    useEffect(() => {

        fetchDirectives();

        async function fetchDirectives() {
            const res = await fetch(url).catch((error) => {
                setDirectives({ error: { code: "net", message: "ERR_NAME_NOT_RESOLVED" } })
            });

            if (res) {
                const data = await res.json();
                setDirectives(data);
            }
        }


    }, [])

    if (!directives) {
        return (
            <div>Loading ...</div>
        );
    }

    return (
        <section>

            <h2>DIRECTIVA</h2>

            {
                directives.map((directive, index) => {
                    return (
                        <article className="directive" key={index}>
                            
                            <div class="pic">
                                <img src={process.env.PUBLIC_URL + `/images/directives/${directive.photo}`} />
                            </div>
                            <div>
                                <h1>{directive.name}</h1>
                                <h2>{directive.title}</h2>
                                <p>{directive.description}</p>
                                <span>
                                    Mail: {directive.email}
                                </span>
                            </div>
                        </article>
                    )
                })
            }

        </section >
    )
}

export default Directive;