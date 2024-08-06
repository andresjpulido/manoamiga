import React, { useState } from 'react';
import './contact.css'

const Contact = () => {

    const url = 'https://manoamiga.nz/echo.php';

    const [success, setsuccess] = useState(true);
    const [isprocessing, setprocessing] = useState(false);
    const [showresponse, setshowresponse] = useState(false);

    const handleSubmit = async (formData) => {
        formData.preventDefault();

        setprocessing(true);
        setshowresponse(false);
 
        const formData2 = new FormData(formData.target);
     
        const res = await fetch(url, {
            method: 'POST',
            body: formData2 ,
             
        }).catch((error) => {
            setsuccess(false)
            setprocessing(false)
            setshowresponse(true)
        });

        if (res) {
            const data = await res.text();
            setsuccess(true);
            setprocessing(false);
            setshowresponse(true);
            console.log(data)
        }
    }


    return (<section>

        <h1>CONTACTO</h1>

        <article className="contact">
        {
                showresponse &&
                <div className={success?'success':'fail'}>
                    {
                        success?"El mensaje fue enviado satisfactoriamente.":"El mensaje no pudo ser enviado, por favor intente mas tarde."
                    }         
                </div>
            }

            {
                isprocessing ?
                    <div>Procesando la solicitud ...</div>
                    :
                    <form id="Formulario" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="control-label" htmlFor="Nombre">Nombres</label>
                            <input type="text" className="form-control" id="Nombre" name="Nombre" placeholder="Introduzca su nombre" required autoFocus />

                        </div>
                        <div className="form-group">
                            <label className="control-label" htmlFor="Motivo">Motivo</label>
                            <input type="text" className="form-control" id="Motivo" name="Motivo" placeholder="Introduzca el motivo" required />

                        </div>
                        <div className="form-group">
                            <label className="control-label" htmlFor="Correo">Dirección de Correo Electrónico</label>
                            <input type="email" className="form-control" id="Correo" name="Correo" placeholder="Introduzca su correo electrónico" required />

                        </div>
                        <div className="form-group">
                            <label className="control-label" htmlFor="Mensaje">Mensaje</label>
                            <textarea rows="5" cols="30" className="form-control" id="Mensaje" name="Mensaje" placeholder="Introduzca su mensaje" required />


                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Enviar
                           </button>
                            <input type="reset" className="btn btn-default" value="Limpiar" />

                        </div>

                    </form>
            }

           
        </article>

    </section>)
}

export default Contact;