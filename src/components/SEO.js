import React from "react"
import { Helmet } from "react-helmet"
// import { useStaticQuery, graphql } from "gatsby"
import { getSiteMetadata } from "../../localDatabase/services"

// const query = graphql`
//   {
//     site {
//       siteMetadata {
//         author
//         siteDesc: description
//         image
//         siteUrl
//         siteTitle: title
//         twitterUsername
//       }
//     }
//   }
// `
// const SEO = ({ title, description }) => {
//   const { site } = useStaticQuery(query)
//   const {
//     siteDesc,
//     siteTitle,
//     siteUrl,
//     image,
//     twitterUsername,
//   } = site.siteMetadata
//   return (
//     <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
//       <meta name="description" content={description || siteDesc} />
//       <meta name="image" content={image} />
//       {/* twitter cards */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:creator" content={twitterUsername} />
//       <meta name="twitter:title" content={siteTitle} />
//       <meta name="twitter:description" content={siteDesc} />
//       <meta name="twitter:image" content={`${siteUrl}${image}`} />
//     </Helmet>
//   )
// }

const SEO = () => {
  const siteMetadata = getSiteMetadata()
  console.log("siteMetadata", siteMetadata)
  const { description, siteTitle, siteUrl, image } = siteMetadata
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
