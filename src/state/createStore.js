import { applyMiddleware, createStore as reduxCreateStore } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import reducer from "../reducers"

const middleware = applyMiddleware(promise(), thunk, logger)

const createStore = () => reduxCreateStore(reducer, middleware)

export default createStore
