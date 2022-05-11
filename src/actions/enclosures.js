import { LOAD_ENCLOSURE, SET_MESSAGE } from "./types";
import EnclosureService from "..//services/enclosure.service"


export const loadEnclosure = () => (dispatch) => {

    return EnclosureService.loadEnclosure().then(
        (response) => {
            dispatch({
                type: LOAD_ENCLOSURE,
                payload: response,
            })
            console.log(response)
            localStorage.setItem("loadedEnclosure", JSON.stringify(response.data.filters));
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