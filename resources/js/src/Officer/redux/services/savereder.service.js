import Services from './services';

const service = new Services();

function orderPage(data) {

    const requestOptions = {
        method: 'GET',
        // body:   {}
    };

    return service.API(`/api/orderPage`, requestOptions)
        .then(res => {
            return res;
        });
}



export const orderService = {
    orderPage,
};
