/**
 * 封装axios的get和post请求
 * Created by Lulee on 2020/4/25
 */

import axios from 'axios'


//axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.timeout = 3000;
axios.defaults.headers = {'X-Requested-With': 'XMLHttpRequest'};
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const handleError = (error)=>{
    console.log(error.toJSON());
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
}

export default{
    get(url,params={}){
        return axios.get(url,params)
        .then(res=>res.data)
        .catch(err=> handleError(err));
    }
}

