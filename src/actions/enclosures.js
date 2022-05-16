import { DELETE_ENCLOSURE, GET_ENCLOSURE, LOAD_ENCLOSURES, PATCH_ENCLOSURE, POST_ENCLOSURE, POST_ANIMAL_TO_ENCLOSURE, DELETE_ANIMAL_FROM_ENCLOSURE, SET_MESSAGE } from "./types";
import EnclosureService from "..//services/enclosure.service"


export const getEnclosure = (id) => (dispatch) => {

    return EnclosureService.getEnclosure(id).then(
        (response) => {
            dispatch({
                type: GET_ENCLOSURE,
                payload: response,
            })
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};

export const loadEnclosures = () => (dispatch) => {

    return EnclosureService.loadEnclosures().then(
        (response) => {
            dispatch({
                type: LOAD_ENCLOSURES,
                payload: response,
            })
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};

export const postEnclosure = (enclosure) => (dispatch) => {

    return EnclosureService.postEnclosure(enclosure).then(
        (response) => {
            dispatch({
                type: POST_ENCLOSURE,
                payload: response,
            })
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};

export const patchEnclosure = (enclosure) => (dispatch) => {

    return EnclosureService.patchEnclosure(enclosure).then(
        (response) => {
            dispatch({
                type: PATCH_ENCLOSURE,
                payload: response,
            })
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};

export const deleteEnclosure = (id) => (dispatch) => {

    return EnclosureService.deleteEnclosure(id).then(
        (response) => {
            dispatch({
                type: DELETE_ENCLOSURE,
                payload: id
            })
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );

}

export const postAnimalToEnclosure = (enclosureId, animalId) => (dispatch) => {

    return EnclosureService.postAnimalToEnclosure(enclosureId, animalId).then(
        (response) => {
            dispatch({
                type: POST_ANIMAL_TO_ENCLOSURE,
                payload: response,
            })
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};

export const deleteAnimalFromEnclosure = (enclosureId, animalId) => (dispatch) => {

    return EnclosureService.deleteAnimalFromEnclosure(enclosureId, animalId).then(
        (response) => {
            dispatch({
                type: DELETE_ANIMAL_FROM_ENCLOSURE,
                payload: response,
            })
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};