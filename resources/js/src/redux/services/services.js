// import { authHeader } from '../helpers';
import {
    NotificationManager
} from 'react-notifications';


class Services {

    getToken() {
        let user = JSON.parse(localStorage.getItem('user'));

        // Retrieves the user token from localStorage
        // return localStorage.getItem('user')

        if (user && user.token) {
            return user.token;
        }
    }

    fetch(url, options) {
        // performs api calls sending the required authentication headers
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }

        // Setting Authorization header
        // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
        if (this.getToken()) {
            headers['Authorization'] = 'Bearer ' + this.getToken()
        }

        // if (this.loggedIn()) {
        //     headers['Authorization'] = 'Bearer ' + authHeader()
        // }

        return fetch(url, {
                headers,
                ...options
            })
            .then(this._handleResponse)
    }

    _handleResponse(response) {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    location.reload(true);
                }
                if (data.error) {
                    NotificationManager.error(data.error, 'Error', 5000);
                }

                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            return data;
        });
    }

}


export default Services;
