
export const ADD_PROFILE = 'ADD_PROFILE';
export const CHANGE_PROFILE_PHOTO = 'CHANGE_PROFILE_PHOTO';

export const  AddProfile = (user) => {
    return {
        type: ADD_PROFILE,
        payload: user
    }
}

export const  ChangePhoto = (photo) => {
    return {
        type: CHANGE_PROFILE_PHOTO,
        payload: photo
    }
}


export const ProfileReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ADD_PROFILE:
            return {
                ...state,
                profile: payload
                
            }
        default:
            return state;
    }
}

export const PhotoReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case CHANGE_PROFILE_PHOTO:
            return {
                ...state,
                photoUri: payload
                
            }
        default:
            return state;
    }
}