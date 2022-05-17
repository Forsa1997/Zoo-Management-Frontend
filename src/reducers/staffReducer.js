import { GET_STAFF, LOAD_STAFFS, POST_STAFF, PATCH_STAFF, DELETE_STAFF, POST_STAFF_TO_ENCLOSURE, DELETE_STAFF_FROM_ENCLOSURE } from "../actions/types";

const initialState = {
    state: {
        staffs: [{
            id: 0,
            firstName: "defaultname",
        }]
    }
};

const staffReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_STAFF:
            return { ...state, selectedStaff: payload.data };
        case LOAD_STAFFS:
            return { ...state, state: payload.data }
        case POST_STAFF:
            return { ...state, postedStaff: payload.data }
        case PATCH_STAFF:
            return { ...state, patchedStaff: payload.data }
        case DELETE_STAFF:
            let newStaffList = [];
            state.staffs.forEach(staff => {
                if (!(staff.id === payload.data)) {
                    newStaffList = [...newStaffList, staff]
                }
            })
            return { ...state, state: newStaffList }
        // TODO Implement
        case POST_STAFF_TO_ENCLOSURE:
            return null;
        // TODO Implement
        case DELETE_STAFF_FROM_ENCLOSURE:
            return null;
        default:
            return state;
    }
}

export default staffReducer;