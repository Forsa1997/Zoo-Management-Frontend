import { GET_ENCLOSURE, LOAD_ENCLOSURES, POST_ENCLOSURE, PATCH_ENCLOSURE, DELETE_ENCLOSURE, POST_ANIMAL_TO_ENCLOSURE, DELETE_ANIMAL_FROM_ENCLOSURE } from "../actions/types";

const initialState = {
    state: {
        enclosures: [{
            animalId: [],
            animalTypes: [],
            cost: { monthlyCost: 0 },
            description: "Default Enclosure",
            id: 0,
            name: "DefaultEnclosure",
            staffId: []
        }]
    },
};

const enclosureReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_ENCLOSURE:
            return { ...state, selectedEnclosure: payload.data };
        case LOAD_ENCLOSURES:
            return { ...state, state: payload.data }
        case POST_ENCLOSURE:
            return { ...state, postedEnclosure: payload.data }
        case PATCH_ENCLOSURE:
            return { ...state, patchedEnclosure: payload.data }
        case DELETE_ENCLOSURE:
            let newEnclosureList = [];
            state.enclosures.forEach(enclosure => {
                if (!(enclosure.id === payload.data)) {
                    newEnclosureList = [...newEnclosureList, enclosure]
                }
            })
            return { ...state, state: newEnclosureList }
        // TODO Implement
        case POST_ANIMAL_TO_ENCLOSURE:
            return null;
        // TODO Implement
        case DELETE_ANIMAL_FROM_ENCLOSURE:
            return null;
        default:
            return state;
    }
}

export default enclosureReducer;