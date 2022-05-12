import axios from 'axios';

const API_URL = "https://zoomanagement-backend.azurewebsites.net/api/animal";

const getAnimal = async (id) => {
    return await axios.get(API_URL + "/" + id)
}

const loadAnimals = async () => {
    return await axios.get(API_URL)
}

const postAnimal = (animal) => {
    return axios.post(API_URL, animal)
}

const patchAnimal = async (animal) => {
    return await axios.patch(API_URL, animal)
}

const deleteAnimal = async (id) => {
    return await axios.delete(API_URL + "/" + id)
}

const exports = {
    getAnimal,
    loadAnimals,
    postAnimal,
    patchAnimal,
    deleteAnimal
}

export default exports;
