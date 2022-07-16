import {
    CATEGORIES,
    PREVIEW_IMAGES,
    IMAGES
} from "../actions/action";

const initState = {
    categories: [],
    images: []
};

const Reducer = (state = initState, action) => {
    if (action.type === CATEGORIES) {
        return {...state, categories: action.categories}
    } else if (action.type === PREVIEW_IMAGES) {
        return {...state, preview_images: action.preview_images}
    } else if (action.type === IMAGES) {
        return {...state, images: action.images}
    } else {
        return {...state}
    }
};

export default Reducer;