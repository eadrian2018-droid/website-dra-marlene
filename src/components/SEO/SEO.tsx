import { Helmet } from "react-helmet-async";


interface SEOProps {

  title: string;

  description: string;

  keywords?: string;

  image?: string;

  url?: string;

}



export default function SEO({

  title,

  description,

  keywords,

  image = "/social-preview.jpg",

  url = "https://www.drmarlenedentalgroup.com",

}: SEOProps) {


  return (

    <Helmet>


      <title>

        {title}

      </title>



      <meta

        name="description"

        content={description}

      />



      {keywords && (

        <meta

          name="keywords"

          content={keywords}

        />

      )}



      <meta

        name="robots"

        content="index, follow"

      />



      <meta

        property="og:title"

        content={title}

      />



      <meta

        property="og:description"

        content={description}

      />



      <meta

        property="og:type"

        content="website"

      />



      <meta

        property="og:url"

        content={url}

      />



      <meta

        property="og:image"

        content={image}

      />



      <meta

        name="twitter:card"

        content="summary_large_image"

      />


      <meta

        name="twitter:title"

        content={title}

      />


      <meta

        name="twitter:description"

        content={description}

      />


    </Helmet>

  );

}