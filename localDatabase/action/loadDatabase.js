var axios = require("axios")
const writeJsonFile = require("write-json-file")
const HOST = "http://localhost:1337"
var Jimp = require('jimp');

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
    writeJsonFile(`localDatabase/json/links.json`, links)
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
    writeJsonFile(`localDatabase/json/jobs.json`, jobs)
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
    writeJsonFile(`localDatabase/json/services.json`, services)
  } catch (error) {
    console.log(error)
  }
}



// const getSiteMetadata = async () => {
//   const data = JSON.stringify({
//     query: `
//     query {
//       siteMetadata {        
//         key
//         value
//       }
//     }    
//     `,
//     variables: {},
//   })

//   const config = {
//     method: "post",
//     url: `${HOST}/graphql`,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     data: data,
//   }

//   try {
//     const response = await axios(config)
//     // console.log(JSON.stringify(response.data));
//     const {
//       data: {
//         data: { siteMetadata },
//       },
//     } = response
//     writeJsonFile(
//       `localDatabase/output/siteMetadata_${new Date().toISOString()}.json`,
//       siteMetadata
//     )
//     writeJsonFile(`localDatabase/siteMetadata.json`, siteMetadata)
//   } catch (error) {
//     console.log(error)
//   }
// }


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
    writeJsonFile(`localDatabase/json/projects.json`, projects)
  } catch (error) {
    console.log(error)
  }
}



const getBlogs = async () => {
  const data = JSON.stringify({
    query: `
    query {
      blogs {
        id
        title
        content
        image
        slug
        category
        description
        createdDate
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
        data: { blogs },
      },
    } = response
    writeJsonFile(
      `localDatabase/output/blogs_${new Date().toISOString()}.json`,
      blogs
    )
    writeJsonFile(`localDatabase/json/blogs.json`, blogs)
  } catch (error) {
    console.log(error)
  }
}


const getMetadata = async () => {
 

  try {
    const {data} = await axios.get('http://localhost:1337/metadata');
    console.log("data ", data);
    const {author, description, image, siteTitle, siteUrl, heroImg} = data;

    // // console.log(JSON.stringify(response.data));
    // const {
    //   data: {
    //     data: { siteMetadata },
    //   },
    // } = response
    const siteMetadata=  {author, description, image, siteTitle, siteUrl, heroImg};
    writeJsonFile(
      `localDatabase/output/siteMetadata_${new Date().toISOString()}.json`,
      {metadata : siteMetadata}
    )
    writeJsonFile(`localDatabase/json/siteMetadata.json`, {metadata : siteMetadata})
  } catch (error) {
    console.log(error)
  }
}



getLinks();
getJobs()
getServices();
// getSiteMetadata();
getProjects();
getBlogs();
getMetadata();
