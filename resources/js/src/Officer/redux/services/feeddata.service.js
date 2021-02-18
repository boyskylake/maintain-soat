<<<<<<< HEAD
import Services from './services';
=======
import Services from "./services";
>>>>>>> e51d39e894a38546c7c69a488567dfa1a749d57f

const service = new Services();

function feedDataGet(url) {
<<<<<<< HEAD

    const requestOptions = {
        method: 'GET',
         //body:   {}
    };

    return service.API(url, requestOptions).then(res => {
            return res;
        });
}

function feedDataPost(url,body ={}) {

    const requestOptions = {
        method: 'POST',
         body: body,
    };

    return service.API(url, requestOptions).then(res => {
            return res;
        });
}


export const feedDataService = {
    feedDataGet,
    feedDataPost
=======
    const requestOptions = {
        method: "GET",
        // body: {},
    };

    return service.API(url, requestOptions).then((res) => {
        return res;
    });
}

function feedDataPost(url, body = {}) {
    const requestOptions = {
        method: "POST",
        body: body,
    };

    return service.API(url, requestOptions).then((res) => {
        return res;
    });
}

export const feedDataService = {
    feedDataGet,
    feedDataPost,
>>>>>>> e51d39e894a38546c7c69a488567dfa1a749d57f
};
