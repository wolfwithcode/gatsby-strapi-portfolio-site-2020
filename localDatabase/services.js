import jobs from './jobs.json'
import services from './services.json'
import siteMetadataList from './siteMetadata.json';

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
