import axios from 'axios';

// Set the site wide keys
export default {
    my_api: "http://sd.lndo.site/",
    base: "http://sd.lndo.site/",
    recptcha_key: "6LeOboYUAAAAABUCnte067huZKgYKD8gpYnIzjEf"
}

// Site wide get menthod for API
export async function axios_get(base_url, end_point){
    const result = await axios.get(base_url + end_point);
    return result.data;
}
