import {combineReducers} from "redux"

import homepage from "./homePageReducer"
import navigation from "./navigationReducer"
import productpage from "./productPageReducer"

export default combineReducers({
    homepage,
    navigation,
    productpage
})