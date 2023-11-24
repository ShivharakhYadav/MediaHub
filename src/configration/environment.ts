const baseURL = process.env.REACT_API_BASE_URL ? process.env.REACT_API_BASE_URL : "http://localhost:4000";

const environment = Object.freeze({
    baseURL: baseURL,
    imageUrl: `${baseURL}/assets/`
})
export default environment;