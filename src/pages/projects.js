import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
// import { getAllProjects } from "../../localDatabase/services"

// const ProjectsPage = ({
//   data: {
//     allStrapiProjects: { nodes: projects },
//   },
// }) => {
//   return (
//     <Layout>
//       <SEO title="Projects" />
//       <section className="projects-page">
//         <Projects projects={projects} title="all projects" />
//       </section>
//     </Layout>
//   )
// }
// export const query = graphql`
//   {
//     allStrapiProjects {
//       nodes {
//         github
//         id
//         description
//         title
//         url
//         image {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         stack {
//           id
//           title
//         }
//       }
//     }
//   }
// `

// export default ProjectsPage



const projects = () => {

  // const projects = getAllProjects();
  // console.log('projects ', projects)
  return (
    <div>
      This projects page
    </div>
  )
}

export default projects
