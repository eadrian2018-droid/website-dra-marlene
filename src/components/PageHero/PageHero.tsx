import "./PageHero.css";

interface Props {

  title: string;

  subtitle: string;

  tag?: string;

}


export default function PageHero({

  title,

  subtitle,

  tag,

}: Props) {


  return (

    <section className="page-hero">


      <div className="page-hero-glow"></div>


      <div className="container">


        {tag && (

          <span className="page-hero-tag">

            {tag}

          </span>

        )}



        <h1>

          {title}

        </h1>



        <p>

          {subtitle}

        </p>



      </div>


    </section>

  );

}