import { Helmet } from "react-helmet-async"

function SEO() {
  return (
    <Helmet>
      <title>Voya Marketing Agency | Digital Growth Experts India</title>

      <meta
        name="description"
        content="Voya is a performance-driven digital marketing agency in India specializing in SEO, paid ads, and social media growth."
      />

      <meta
        name="keywords"
        content="digital marketing agency India, SEO Ahmedabad, social media marketing India"
      />

      <link rel="canonical" href="https://voyamarketing.in" />

      <meta property="og:title" content="Voya Marketing Agency" />
      <meta property="og:type" content="website" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Voya Marketing",
          url: "https://voyamarketing.in"
        })}
      </script>
    </Helmet>
  )
}

export default SEO