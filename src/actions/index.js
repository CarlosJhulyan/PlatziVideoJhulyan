export const setFavorite = payload => ({
    type: 'SET_FAVORITE',
    payload,
})

export const deleteFavorite = payload => ({
    type: 'DELETE_FAVORITE',
    payload
})

export const loginRequest = payload => ({
    type: 'USER_REQUEST',
    payload
})