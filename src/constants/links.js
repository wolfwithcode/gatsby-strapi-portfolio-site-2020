import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"


const query = graphql`
  {
    allLinksJson {
      nodes {
        text
        url
        id
      }
    }
  }
`
export default ({ styleClass }) => {
  const data = useStaticQuery(query);
  // console.log('links data', data);
  const {allLinksJson: {nodes: links}} = data;
  console.log('links ', links);
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {links.map((link, index) => ( <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>) )}
    </ul>
  )
}
