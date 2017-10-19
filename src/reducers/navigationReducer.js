const inititalState = {
    data: [],
    language: 'nl-be',
    fetching: false,
    fetched: false,
    error: null
}

export default function reducer(state=inititalState, action) {
    switch (action.type) {
        case "FETCH_NAV":{
            return {...state, fetching: true}
            break;
        }
        case "FETCH_NAV_REJECTED":{
            return {...state, fetching: false, error: action.payload}
            break;
        }
        case "FETCH_NAV_FULFILLED":{
            return {...state, fetching: false, fetched: true, data: action.payload, language: action.payload.language}
            break;
        }
    }
    return state;
}