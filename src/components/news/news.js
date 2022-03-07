import './news.css';

export default function News(props) {

    const list = props.list

    if (!list || list.length === 0)
        return (<div></div>)

    return (
        <div>
            {
                list.map((newsItem, index) => {

                    if ( newsItem.type !== "text") {

                        return (
                            <article className="news" key={index}>
                                <p>
                                    <img src={process.env.PUBLIC_URL + `/images/news/${newsItem.image}`} title={newsItem.image_label} />
                                </p>
                                <p>{newsItem.description}</p>
                            </article>)

                    }

                    if ( newsItem.type === "text") {
                        return (
                            <article className="news" key={index}>
                                <div className="news-title">{newsItem.title}</div>
                                <p>{newsItem.text}</p>
                            </article>
                        )
                    }

                })
            }
        </div>
    )

}