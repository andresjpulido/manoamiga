import React from 'react';
import './contact.css'

const Contact = () => {
    return (<section>

        <h2>CONTACTO</h2>

        <article className="contact">

        <form role="form" id="Formulario" action="contacto2.php" method="POST">
            <div class="form-group">
                <label class="control-label" for="Nombre">Nombres</label>
                <input type="text" class="form-control" id="Nombre" name="Nombre" placeholder="Introduzca su nombre" required autofocus />

            </div>
            <div class="form-group">
                <label class="control-label" for="Motivo">Motivo</label>
                <input type="text" class="form-control" id="Motivo" name="Motivo" placeholder="Introduzca el motivo" required autofocus />

            </div>
            <div class="form-group">
                <label class="control-label" for="Correo">Dirección de Correo Electrónico</label>
                <input type="email" class="form-control" id="Correo" name="Correo" placeholder="Introduzca su correo electrónico" required />

            </div>
            <div class="form-group">
                <label class="control-label" for="Mensaje">Mensaje</label>
                <textarea rows="5" cols="30" class="form-control" id="Mensaje" name="Mensaje" placeholder="Introduzca su mensaje" required />


            </div>
            <div class="form-group">
                <input type="submit" class="btn btn-primary" value="Enviar" />
                <input type="reset" class="btn btn-default" value="Limpiar" />

            </div>

        </form>

        </article>

    </section>)
}

export default Contact;