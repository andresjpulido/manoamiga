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

            <h1>DIRECTIVA</h1>

            {
                directives.map((directive, index) => {
                    console.log(directive.email)
                    return (
                        <article className="directive" key={index}>

                            <div className="pic">
                                <img src={process.env.PUBLIC_URL + `/images/directives/${directive.photo}`} />
                            </div>
                            <div className="description">
                                <h3>{directive.name}</h3>
                                <h4>{directive.title}</h4>
                                <p>{directive.description}</p>
                                <p className="right">
                                {
                                    (directive.email !== undefined) && <span>
                                    Mail: {directive.email} 
                                    
                                </span>
                                }
                                    
                                </p>
                            </div>
                        </article>
                    )
                })
            }

        </section >
    )
}

export default Directive;