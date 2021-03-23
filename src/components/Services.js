import React from "react"
import Title from "./Title"
import { IconsDictionary } from "../constants/services"
import { useStaticQuery } from "gatsby"
const query = graphql`
  {
    allServicesJson {
      nodes {
        id
        title
        type
        description
      }
    }
  }
`

const Services = () => {
  const data = useStaticQuery(query);
  const {allServicesJson: {nodes: services}} = data;
  console.log('services ', services)
  return (
    <section className="section bg-grey">
      <Title title="services" />
      <div className="section-center services-center">
        {services.map(service => {
          const { id, title, description, type } = service
          const icon = IconsDictionary[type];
          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
