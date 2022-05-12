import { GET_ANIMAL } from "../actions/types";

const initialState = {};

const animalReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_ANIMAL:
            return { ...state, selectedAnimal: payload.data };
        default:
            return state;
    }
}

export default animalReducer;