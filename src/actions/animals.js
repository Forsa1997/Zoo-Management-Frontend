import { DELETE_ANIMAL, GET_ANIMAL, LOAD_ANIMALS, PATCH_ANIMAL, POST_ANIMAL, SET_MESSAGE } from "./types";
import AnimalService from "..//services/animal.service"


export const getAnimal = (id) => (dispatch) => {

    return AnimalService.getAnimal(id).then(
        (response) => {
            dispatch({
                type: GET_ANIMAL,
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

export const loadAnimals = () => (dispatch) => {

    return AnimalService.loadAnimals().then(
        (response) => {
            dispatch({
                type: LOAD_ANIMALS,
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

export const postAnimal = (animal) => (dispatch) => {

    return AnimalService.postAnimal(animal).then(
        (response) => {
            dispatch({
                type: POST_ANIMAL,
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

export const patchAnimal = (animal) => (dispatch) => {

    return AnimalService.patchEnclosure(animal).then(
        (response) => {
            dispatch({
                type: PATCH_ANIMAL,
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

export const deleteAnimal = (id) => (dispatch) => {

    return AnimalService.deleteEnclosure(id).then(
        (response) => {
            dispatch({
                type: DELETE_ANIMAL,
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