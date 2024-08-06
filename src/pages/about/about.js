import "./about.css";
import people from "../../assets/images/about/5.jpg";
import logo from "../../assets/images/about/logopage.jpg";

const About = () => {
  return (
    <section>
      <article className="about">
        <img src={logo} alt="Acerca de nosotros" />
        <h1>Acerca de Nosotros</h1>
        <hr />
        <p>
          Mano Amiga es una organización sin fines de lucro que comenzo a
          funcionar el año 2010 con el objetivo de ayudar y guiar a personas de
          habla española que necesitaban una Mano Amiga en tierras lejanas. Mano
          Amiga ofrece ayuda social y económica a inmigrantes y sus familias,
          que puedan sentirse desorientados en su nuevo país de residencia. Esta
          ayuda se provee sin discriminación de nacionalidad, religión,
          política, edad o raza.
        </p>
      </article>

      <article className="about">
        <img src={people} alt="Acerca de nosotros" />
        <h2>Nuestros Inicios</h2>
        <hr />
        <p>
          El grupo se inicio el año 2010, a raiz del terremoto de Concepción,
          Chile. Un grupo de mujeres por iniciativa de Marisol Valenzuela
          tuvieron una reunión profondos para ayudar a las familias damnificadas
          canalizando el dinero a través de la iglesia catolica. Asistieron
          señoras de diferentes partes de latinoamérica para colaborar en dicho
          evento. Se vendieron empanadas, panes chilenos etc. Fue un evento
          hermoso lleno de Solidaridad y cariño. Es asi como surge la idea de
          poder reunirse otra vez y pensar que podrían hacer para ayudar a los
          amigos latinos inmigrantes en NZ.
        </p>
        <p>
          El grupo comenzo a tener forma e identificó sus objetivos y metas. Asi
          como la planificacion de diferentes actividades Eligieron su junta
          directiva y comenzaron a trabajar unidas reuniendose una vez al mes.
          Durante estos siete años se ayudo a un numero grande de personas de
          diferentes paises de habla hispana como Chile, Colombia, Argentina,
          Mexico y Brasil. En algunos casos con visitas, transporte, dinero,
          viveres, ropa, medicinas, tramites, etc.
        </p>
        <p>
          Mano Amiga todos los años organiza un bingo anual en el que recolecta
          fondos, los cuales le sirven para ayudar durante el año a las personas
          que lo necesiten. También han participado vendiendo comida en
          diferentes actividades culturales. El año 2016 en el mes de Noviembre
          recibieron la aprobación de ser un grupo legal registrado de caridad.
          Con mucha emoción Mano amiga les invita a divulgar esta gran noticia y
          a contactarse abiertamente cuando lo crean necesario. Tambien
          agradecen a la Presidenta fundadora Marisol Valenzuela y a todas las
          personas que apoyaron de alguna forma a que este sueño se haga
          realidad el de continuar juntas y más aun con legalidad del Gobierno
          de este gran pais que es Nueva Zelandia.
        </p>
      </article>

      <article className="about">
        <h2>Misión</h2>
        <hr />
        <p>
          Nuestra misión es empoderar a los inmigrantes de habla hispana durante
          su estancia en Nueva Zelanda para que se integren con éxito en sus
          nuevas comunidades y prosperen en Nueva Zelanda.
        </p>
      </article>

      <article className="about">
        <h2>Visión</h2>
        <p>
          Nuestra visión es un país en el que cada inmigrante de habla hispana
          tenga los recursos y el apoyo que necesitan para superar los desafíos
          de la asimilación y construir una vida plena en Nueva Zelanda.
        </p>
      </article>

      <article className="about">
        <h2>Valores</h2>
        <p>
          <img src="/images/about/sympathy.svg" alt="Mano amiga Values - Sympathy" />
          <span className="bold">Compasión:</span> Abordamos nuestro trabajo con solidaridad y comprensión,
          reconociendo los desafíos únicos a los que se enfrentan los
          inmigrantes de habla hispana.
        </p>
        <p>
          <img src="/images/about/inclusion.svg" alt="Mano amiga Values - Inclusion" />
          <span className="bold">Inclusión:</span> Nos esforzamos por crear un ambiente inclusivo donde todos
          los inmigrantes se sientan bienvenidos y valorados.
        </p>
        <p>
          <img src="/images/about/empowerment.svg" alt="Mano amiga Values - Empowerment" />
          <span className="bold">Empoderamiento:</span> Creemos en capacitar a los inmigrantes para que tomen
          el control de sus propias vidas y logren sus metas.
        </p>
        <p>
        <img src="/images/about/collaboration.svg" alt="Mano amiga Values - Collaboration" />
        <span className="bold">Colaboración:</span> Trabajamos en colaboración con otras organizaciones y
          miembros de la comunidad para brindar el mejor apoyo posible a los
          inmigrantes de habla hispana.
        </p>
      </article>
    </section>
  );
};

export default About;
