import axios from 'axios'

export const getBusinesses = () => {
    return function (dispatch) {
        axios
            .get('/users')
            .then((res) => {
                const action = {
                    type: 'GET_BUSINESSES',
                    value: res.data,
                }
                dispatch(action)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const getTickets = () => {
    return function (dispatch) {
        axios.get(`/users/tickets`).then((res) => {
            const action = {
                type: 'GET_TICKETS',
                value: res.data,
            }
            dispatch(action)
        })
    }
}

export const createTicket = (postBody) => {
    return function (dispatch) {
        axios
            .post('/users', { postBody })
            .then((res) => {
                const action = {
                    type: 'POST_TICKET',
                    value: res.data,
                }
                dispatch(action)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const getQuotes = () => {
    return function (dispatch) {
        axios
            .get('https://type.fit/api/quotes')
            .then((res) => {
                const action = {
                    type: 'GET_QUOTES',
                    value: res.data,
                }
                dispatch(action)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
