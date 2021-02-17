import Services from "./services";

const service = new Services();

function feedDataGet(url) {
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
};
