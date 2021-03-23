import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"



const query = graphql`
  {
    allProjectsJson(filter: {featured: {eq: true}}) {
      nodes {
        description
        featured
        github
        id
        image
        title
        url
        stacks {
          title
        }
      }
    }
    allBlogsJson(sort: {fields: createdDate, order: ASC}) {
      nodes {
        title
        slug
        id
        description
        createdDate(fromNow: true, formatString: "DD/MM/YY")
        content
        image
        category
      }
    }
  }
`
const Index = () => {

const data = useStaticQuery(query);
  const {allBlogsJson: {nodes: blogs}, allProjectsJson: {nodes: projects}} = data;
  console.log('blogs   ',blogs);
  console.log('projects    ',projects);
  
  return (
    <Layout>
      <SEO title="Home" description="this is our home page" />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
      <Blogs blogs={blogs} title="latest articles" showLink />
    </Layout>
  )
}

export default Index;