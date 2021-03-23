import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
{
  allJobsJson {
    nodes {
      company
      fromDate
      descriptions {
        name
      }
      toDate
      id
    }
  }
}
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allJobsJson: { nodes: jobs },
  } = data
  console.log('jobs ', jobs)
  const [value, setValue] = React.useState(0)
  const { company, position, fromDate, toDate, descriptions } = jobs[value]
  console.log('descriptions ', descriptions)
  return (
    <section className="section jobs">
      <Title title="expierence" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{'\t'+'from'+'\t'+fromDate+'\t'+'to'+'\t'+toDate}</p>
          {descriptions.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
