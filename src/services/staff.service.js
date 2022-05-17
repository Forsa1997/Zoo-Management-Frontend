import axios from 'axios';



const API_URL = "https://zoomanagement-backend.azurewebsites.net/api/staff";

const getStaff = async (id) => {
    return await axios.get(API_URL + "/" + id)
}

const loadStaffs = async () => {
    return await axios.get(API_URL)
}

const postStaff = (staff) => {
    return axios.post(API_URL, staff)
}

const patchStaff = async (staff) => {
    return await axios.patch(API_URL, staff)
}

const deleteStaff = async (id) => {
    return await axios.delete(API_URL + "/" + id)
}

const postStaffToEnclosure = (enclosureId, staffId) => {
    return axios.post(API_URL + "/" + staffId + "enclosure/" + enclosureId)
}

const deleteStaffFromEnclosure = async (enclosureId, staffId) => {
    return await axios.delete(API_URL +  "/" + staffId + "enclosure/" + enclosureId)
}

const exports = { 
    getStaff,
    loadStaffs,
    postStaff,
    patchStaff,
    deleteStaff,
    postStaffToEnclosure,
    deleteStaffFromEnclosure }

export default exports;