import jobs from './jobs.json'
import services from './services.json'
import siteMetadataList from './siteMetadata.json';
import projects from './projects.json'
import blogs from './blogs.json'

const siteMetadata = {};
siteMetadataList.map(item => {
    siteMetadata[item.key] = item.value;
})

export const getSiteMetadata = () => {
    return siteMetadata;
}

export const getAllJobs = () => {
    return jobs;
}

export const getAllServices = () => {
    return services;
}


export const getAllProjects = () => {
    return projects;
}


export const getAllBlogs = () => {
    return blogs;
}
