import Services from "./services";

const service = new Services();

function feedDataGet(url) {
    const requestOptions = {
        method: "Get",
        //  body:   {}
    };

    return service.API(url, requestOptions).then((res) => {
        return res;
    });
}
function feedDataPost(url, body = {}) {
    console.log(body)
    const requestOptions = {
        method: "POST",
        data: JSON.stringify(body),
    };

    return service.API(url, requestOptions).then((res) => {
        return res;
    });
}

export const feedDataService = {
    feedDataGet,
    feedDataPost,
};
