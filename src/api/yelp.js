import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer RNfKGM4gStQSJ99Iwro2fM3h6VsI9j9EvQGxD81uAeCAJPjMXST_mVEBGAHLcJeAffDyp-KFdpNx6IfR26oz4EKYORAzXA85OlVQ23l0hYDglxvKQLZ9UeklbfeTYnYx'
    }
})