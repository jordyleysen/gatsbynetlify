import {applyMiddleware, createStore} from "redux"
var Prismic = require('prismic-javascript');

export function fetchHome(language="nl-be"){
    return function(dispatch){
        var apiEndpoint = "https://martal-test.prismic.io/api/v2";
        dispatch({type: "FETCH_DATA"});
        Prismic.getApi(apiEndpoint).then(function(api) {
            return api.query(Prismic.Predicates.at('document.type', 'homepage'),
            { lang : language , orderings : '[document.last_publication_date desc]' }); // An empty query will return all the documents
        }).then(function(response) {
            console.log("home: ", response.results[0].data);
            dispatch({type: "FETCH_DATA_FULFILLED", payload: {results: response.results[0].data, language: language}});
        }, function(err) {
            //console.log("Something went wrong: ", err);
            dispatch({type: "FETCH_DATA_REJECTED", payload: err})
        });
    }
}