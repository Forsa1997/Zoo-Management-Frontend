import axios from 'axios';



const API_URL = "https://zoomanagement-backend.azurewebsites.net/api/enclosure";

const loadEnclosure = async () => {
    return await axios.get(API_URL)
}

const loadEnclosures = async () => {
    return await axios.get(API_URL)
}





const exports = {loadEnclosure, loadEnclosures}

export default exports;