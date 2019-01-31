import axios from 'axios';

// Set the site wide keys
export default {
    my_api: "https://sdcom.addwebprojects.com",
    base: "http://45.55.34.87:3300",
    recptcha_key: "6LeOboYUAAAAABUCnte067huZKgYKD8gpYnIzjEf"
}

// Site wide get menthod for API
export async function axios_get(base_url, end_point){
    const result = await axios.get(base_url + end_point);
    return result.data;
}
