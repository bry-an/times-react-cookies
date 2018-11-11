import axios from 'axios'

export default {

    articleQuery: (query) => {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=2f4c7e36cea0482ea88f37369fef0f11`
    return axios.get(url, {crossdomain: true })
    },

    articleQueryByDate: (query, beginDate, endDate) => {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&begin_date=${beginDate}&end_date=${endDate}&api-key=2f4c7e36cea0482ea88f37369fef0f11`
    return axios.get(url, {crossdomain: true })
    }
}
