import './donations.css';

export default function Donations() {

    return (
        <div>
            <h1>DONACIONES</h1>
            <div className="donations-container">
                <div >
                    <img src={process.env.PUBLIC_URL + `/images/news/kiwibank.png`} alt="cuenta Kiwibank" className="logobank" />
                </div>
                <div className="databank">
                    <p>Cuenta Bancaria:</p>
                    <p>38 9018 0656981 00</p>
                    <p>Tu aporte nosta ayuda a seguir</p>
                </div>
            </div>
        </div>
    )
}