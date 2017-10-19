import {applyMiddleware, createStore} from "redux"
var Prismic = require('prismic-javascript');

export function fetchProductPage(language="nl-be"){
    return function(dispatch){
        var apiEndpoint = "https://martal-test.prismic.io/api/v2";
        dispatch({type: "FETCH_PRODUCTPAGE"});
        Prismic.getApi(apiEndpoint).then(function(api) {
            return api.query(Prismic.Predicates.at('document.type', 'productpage'),
            { lang : language , orderings : '[document.last_publication_date desc]' }); // An empty query will return all the documents
        }).then(function(response) {
            console.log("productpage: ", response.results[0].data);
            dispatch({type: "FETCH_PRODUCTPAGE_FULFILLED", payload: {results: response.results[0].data, language: language}});
        }, function(err) {
            //console.log("Something went wrong: ", err);
            dispatch({type: "FETCH_PRODUCTPAGE_REJECTED", payload: err})
        });
    }
}

export function fetchProductPageProducts(language="nl-be"){
    return function(dispatch){
        var apiEndpoint = "https://martal-test.prismic.io/api/v2";
        dispatch({type: "FETCH_PRODUCTPAGE_PRODUCTS"});
        Prismic.getApi(apiEndpoint).then(function(api) {
            return api.query(Prismic.Predicates.at('document.type', 'product-short'),
            { lang : language , orderings : '[document.last_publication_date desc]' }); // An empty query will return all the documents
        }).then(function(response) {
            console.log("productpage Products: ", response.results);
            dispatch({type: "FETCH_PRODUCTPAGE_PRODUCTS_FULFILLED", payload: {results: response.results, language: language}});
        }, function(err) {
            //console.log("Something went wrong: ", err);
            dispatch({type: "FETCH_PRODUCTPAGE_PRODUCTS_REJECTED", payload: err})
        });
    }
}