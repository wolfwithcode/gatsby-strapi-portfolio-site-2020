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

// getLinks();
// getJobs()
getServices();
