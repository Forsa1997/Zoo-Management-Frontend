import { DELETE_STAFF, GET_STAFF, LOAD_STAFFS, PATCH_STAFF, POST_STAFF, POST_STAFF_TO_ENCLOSURE, DELETE_STAFF_FROM_ENCLOSURE, SET_MESSAGE } from "./types";
import StaffService from "..//services/staff.service"


export const getStaff = (id) => (dispatch) => {

    return StaffService.getStaff(id).then(
        (response) => {
            dispatch({
                type: GET_STAFF,
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

export const loadStaffs = () => (dispatch) => {

    return StaffService.loadStaffs().then(
        (response) => {
            dispatch({
                type: LOAD_STAFFS,
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

export const postStaff = (staff) => (dispatch) => {

    return StaffService.postStaff(staff).then(
        (response) => {
            dispatch({
                type: POST_STAFF,
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

export const patchStaff = (staff) => (dispatch) => {

    return StaffService.patchStaff(staff).then(
        (response) => {
            dispatch({
                type: PATCH_STAFF,
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

export const deleteStaff= (id) => (dispatch) => {

    return StaffService.deleteStaff(id).then(
        (response) => {
            dispatch({
                type: DELETE_STAFF,
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

export const postStaffToEnclosure = (enclosureId, staffId) => (dispatch) => {

    return StaffService.postStaffToEnclosure(enclosureId, staffId).then(
        (response) => {
            dispatch({
                type: POST_STAFF_TO_ENCLOSURE,
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

export const deleteStaffFromEnclosure = (enclosureId, staffId) => (dispatch) => {

    return StaffService.deleteStaffFromEnclosure(enclosureId, staffId).then(
        (response) => {
            dispatch({
                type: DELETE_STAFF_FROM_ENCLOSURE,
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