// Custom imports
import axios from 'axios';

// Global variable
axios.defaults.baseURL = 'https://api.unsplash.com/';

// Constant variables
const CLIENT_ID = 'dIN6uFdSzgL3MT7PP5yT03Ug31FqU0ZUBTA7uRhJVfM';
export const CATEGORIES = 'CATEGORIES';
export const PREVIEW_IMAGES = 'PREVIEW_IMAGES';
export const IMAGES = 'IMAGES';

function SetCategories(categories) {
    return {
        type: CATEGORIES,
        categories: categories
    }
}

function SetPreviewImages(preview_images) {
    return {
        type: PREVIEW_IMAGES,
        preview_images: preview_images
    }
}

function SetImagesForTopic(images) {
    return {
        type: IMAGES,
        images: images
    }
}

export function GetCategories() {
    return (dispatch) => {
        return axios
            .get('topics?client_id=' + CLIENT_ID)
            .then(data => {
                dispatch(SetCategories(data.data));
                dispatch(SetPreviewImages(data.data[4].preview_photos));
            })
            .catch(error => console.log(error));
    }
}

export function GetImages(topic) {
    return (dispatch) => {
        return axios
            .get('topics/' + topic + '/photos/?client_id=' + CLIENT_ID)
            .then(data => {
                dispatch(SetImagesForTopic(data.data));
            })
            .catch(error => console.log(error));
    }
}