import { GET_ANIMAL, LOAD_ANIMALS, POST_ANIMAL, PATCH_ANIMAL, DELETE_ANIMAL} from "../actions/types";

const initialState = {};

const animalReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_ANIMAL:
            return { ...state, selectedAnimal: payload.data };
        case LOAD_ANIMALS:
            return {...state, state: payload.data};
        case POST_ANIMAL:
            return{...state, postedAnimal: payload.data}
        case PATCH_ANIMAL:
            return{...state, patchedAnimal: payload.data}
        case DELETE_ANIMAL:
        let newAnimalsList = [];
        state.animals.forEach(animal => {
            if (!(animal.id === payload.data)) {
                newAnimalsList = [...newAnimalsList, animal]
            }
        })
        return { ...state, state: newAnimalsList }
        default:
            return state;
    }
}

export default animalReducer;