import { GET_ANIMAL, SET_MESSAGE } from "./types";
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