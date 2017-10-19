const inititalState = {
    data: [],
    productsShort: [], 
    language: 'nl-be',
    fetchingData: false,
    fetchingProducts: false,
    fetchedData: false,
    fetchedproducts: false,
    error: null
}

export default function reducer(state=inititalState, action) {
    switch (action.type) {
        case "FETCH_PRODUCTPAGE":{
            return {...state, fetchingData: true}
            break;
        }
        case "FETCH_PRODUCTPAGE_REJECTED":{
            return {...state, fetchingData: false, error: action.payload}
            break;
        }
        case "FETCH_PRODUCTPAGE_FULFILLED":{
            return {...state, fetchingData: false, fetchedData: true, data: action.payload.results, language: action.payload.language}
            break;
        }
        case "FETCH_PRODUCTPAGE_PRODUCTS":{
            return {...state, fetchingProducts: true}
            break;
        }
        case "FETCH_PRODUCTPAGE_PRODUCTS_REJECTED":{
            return {...state, fetchingProducts: false, error: action.payload}
            break;
        }
        case "FETCH_PRODUCTPAGE_PRODUCTS_FULFILLED":{
            return {...state, fetchingProducts: false, fetchedproducts: true, productsShort: action.payload.results, language: action.payload.language}
            break;
        }
    }
    return state;
}