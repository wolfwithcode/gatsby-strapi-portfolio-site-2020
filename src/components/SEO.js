import { useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

const query = graphql`
  {
    jsonJson {
      metadata {
        author
        description
        heroImg
        image
        siteTitle
        siteUrl
      }
    }
  }
`

const SEO = () => {
  const data = useStaticQuery(query);
  console.log('data ', data)
  const {jsonJson: {metadata}} = data;
  // const siteMetadata = getSiteMetadata()
  console.log("metadata", metadata)
  const { description, siteTitle, siteUrl, image } = metadata;
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${siteTitle} | ${siteTitle}`}>
      <meta name="description" content={description } />
      <meta name="image" content={image} />
      {/* twitter cards */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:creator" content={twitterUsername} /> */}
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${image}`} />
    </Helmet>
  )
}

export default SEO
