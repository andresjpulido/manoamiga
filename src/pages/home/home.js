import React, { useEffect, useState } from 'react';
import News from './../../components/news'
import './home.css'

const Home = () => {

    const [news, setNews] = useState(null);
    const url = "/data/news.json";

    useEffect(() => {

        fetchNews();

        async function fetchNews() {
            const res = await fetch(url).catch((error) => {
                setNews({ error: { code: "net", message: "ERR_NAME_NOT_RESOLVED" } })
            });

            if (res) {
                const data = await res.json();
                setNews(data);
            }
        }


    }, [])

    if (!news) {
        return (
            <div>Loading ...</div>
        );
    }

    return (
        <section>
            <h1>&Uacute;LTIMAS NOTICIAS</h1>
            <News list={news} />
        </section>)
}

export default Home;