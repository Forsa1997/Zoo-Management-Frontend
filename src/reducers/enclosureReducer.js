import { LOAD_ENCLOSURE } from "../actions/types";

const initialState = {};

const enclosureReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case LOAD_ENCLOSURE:
            return {loadedEnclosure: payload};
        default:
            return state;
    }
}

export default enclosureReducer;