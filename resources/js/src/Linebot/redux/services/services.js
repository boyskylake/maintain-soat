class Services {
    getToken() {
        let user = localStorage.getItem("linetoken");

        if (user) {
            return user;
        }
    }

    API(url, options) {
        const headers = {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        };

        if (this.getToken()) {
            headers["Authorization"] = "Bearer " + this.getToken();
        }

        return axios(url, {
            headers,
            ...options,
        })
            .then(this._handleResponseAPIsuc)
            .catch(this._handleResponseAPIerr);
    }

    _handleResponseAPIsuc(response) {
        const data = response.data;
        return data;
    }

    _handleResponseAPIerr(err) {
        const errors = err.response;
        // if (errors.status === 401) {
        //     location.reload(true);
        // }
        // if (errors.data.error) {
        //     NotificationManager.error(errors.data.error, "Error", 5000);
        // }
        const error = (errors.data && errors.data.message) || errors.statusText;

        return Promise.reject(error);
    }
}

export default Services;
