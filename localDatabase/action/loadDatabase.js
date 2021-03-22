var axios = require("axios")
const writeJsonFile = require("write-json-file")
const HOST = "http://localhost:1337"

const getLinks = async () => {
  const data = JSON.stringify({
    query: `query{
    links{
      id
      text
      url
    }
  }`,
    variables: {},
  })

  const config = {
    method: "post",
    url: `${HOST}/graphql`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  }

  try {
    const response = await axios(config)
    // console.log(JSON.stringify(response.data));
    const { links } = response.data.data
    writeJsonFile(
      `localDatabase/output/links_${new Date().toISOString()}.json`,
      links
    )
    writeJsonFile(`localDatabase/links.json`, links)
  } catch (error) {
    console.log(error)
  }
}

const getJobs = async () => {
  const data = JSON.stringify({
    query: `query {
      jobs {
        id
        company
        fromDate
        toDate
        descriptions {
          id
          name
        }
      }
    }
    `,
    variables: {},
  })

  const config = {
    method: "post",
    url: `${HOST}/graphql`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  }

  try {
    const response = await axios(config)
    // console.log(JSON.stringify(response.data));
    const {
      data: {
        data: { jobs },
      },
    } = response
    writeJsonFile(
      `localDatabase/output/jobs_${new Date().toISOString()}.json`,
      jobs
    )
    writeJsonFile(`localDatabase/jobs.json`, jobs)
  } catch (error) {
    console.log(error)
  }
}

const getServices = async () => {
  const data = JSON.stringify({
    query: `
    query{
      services{
        id
        title
        description
        type
      }
    }
    `,
    variables: {},
  })

  const config = {
    method: "post",
    url: `${HOST}/graphql`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  }

  try {
    const response = await axios(config)
    // console.log(JSON.stringify(response.data));
    const {
      data: {
        data: { services },
      },
    } = response
    writeJsonFile(
      `localDatabase/output/services_${new Date().toISOString()}.json`,
      services
    )
    writeJsonFile(`localDatabase/services.json`, services)
  } catch (error) {
    console.log(error)
  }
}



const getSiteMetadata = async () => {
  const data = JSON.stringify({
    query: `
    query {
      siteMetadata {        
        key
        value
      }
    }    
    `,
    variables: {},
  })

  const config = {
    method: "post",
    url: `${HOST}/graphql`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  }

  try {
    const response = await axios(config)
    // console.log(JSON.stringify(response.data));
    const {
      data: {
        data: { siteMetadata },
      },
    } = response
    writeJsonFile(
      `localDatabase/output/siteMetadata_${new Date().toISOString()}.json`,
      siteMetadata
    )
    writeJsonFile(`localDatabase/siteMetadata.json`, siteMetadata)
  } catch (error) {
    console.log(error)
  }
}


const getProjects = async () => {
  const data = JSON.stringify({
    query: `
    query {
      projects{
        id
        title
        description
        image
        github
        url
        featured
        stacks{
          title
        }
      }
    }    
    `,
    variables: {},
  })

  const config = {
    method: "post",
    url: `${HOST}/graphql`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  }

  try {
    const response = await axios(config)
    // console.log(JSON.stringify(response.data));
    const {
      data: {
        data: { projects },
      },
    } = response
    writeJsonFile(
      `localDatabase/output/projects_${new Date().toISOString()}.json`,
      projects
    )
    writeJsonFile(`localDatabase/projects.json`, projects)
  } catch (error) {
    console.log(error)
  }
}



// getLinks();
// getJobs()
// getServices();
// getSiteMetadata();
getProjects();
