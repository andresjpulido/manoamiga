import './followus.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Followus = () => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <article className="followus">

            <h3>S&iacute;guenos</h3>

            <div className="facebook" onClick={() => openInNewTab('https://www.facebook.com/mano.amiga.754/friends_all')}>
                <FontAwesomeIcon className="icon" icon={["fab", "facebook"]} />
                <span className="title">Facebook</span>
                <span className="name">Mano Amiga</span>
            </div>

        </article>
    )
}

export default Followus;