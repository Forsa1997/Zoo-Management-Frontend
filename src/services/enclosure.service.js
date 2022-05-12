import axios from 'axios';



const API_URL = "https://zoomanagement-backend.azurewebsites.net/api/enclosure";

const getEnclosure = async (id) => {
    return await axios.get(API_URL + "/" + id)
}

const loadEnclosures = async () => {
    return await axios.get(API_URL)
}

const postEnclosure = (enclosure) => {
    return axios.post(API_URL, enclosure)
}

const patchEnclosure = async (enclosure) => {
    return await axios.patch(API_URL, enclosure)
}

const deleteEnclosure = async (id) => {
    return await axios.delete(API_URL + "/" + id)
}

const postAnimalToEnclosure = (enclosureId, animalId) => {
    return axios.post(API_URL + "/" + enclosureId + "animal/" + animalId)
}

const deleteAnimalFromEnclosure = async (enclosureId, animalId) => {
    return await axios.delete(API_URL + "/" + enclosureId + "animal/" + animalId)
}

const exports = { 
    getEnclosure,
    loadEnclosures,
    postEnclosure,
    patchEnclosure,
    deleteEnclosure,
    postAnimalToEnclosure,
    deleteAnimalFromEnclosure }

export default exports;