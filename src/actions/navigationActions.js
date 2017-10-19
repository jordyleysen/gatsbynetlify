import {applyMiddleware, createStore} from "redux"
var Prismic = require('prismic-javascript');

export function fetchNav(language="nl-be"){
    return function(dispatch){
        var apiEndpoint = "https://martal-test.prismic.io/api/v2";
        dispatch({type: "FETCH_NAV"});
        Prismic.getApi(apiEndpoint).then(function(api) {
            return api.query(Prismic.Predicates.at('document.type', 'navigation'),
            { lang : language , orderings : '[document.last_publication_date desc]' }); // An empty query will return all the documents
        }).then(function(response) {
            //console.log("navigation: ", response.results[0].data.menu_links);
            dispatch({type: "FETCH_NAV_FULFILLED", payload: {results: response.results[0].data.menu_links, language: language}});
        }, function(err) {
            //console.log("Something went wrong: ", err);
            dispatch({type: "FETCH_NAV_REJECTED", payload: err})
        });
    }
}