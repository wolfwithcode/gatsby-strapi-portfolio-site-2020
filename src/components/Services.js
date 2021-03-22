import React from "react"
import { getAllServices } from "../../localDatabase/services"
import Title from "./Title"
import services, { IconsDictionary } from "../constants/services"

const Services = () => {
  const services = getAllServices();
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
