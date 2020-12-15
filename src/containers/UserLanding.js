import { connect } from 'react-redux'
import UserLanding from '../components/UserLanding'
import {
    getBusinesses,
    getTickets,
    createTicket,
    getQuotes,
} from '../redux/action'

const mapStateToProps = (state) => {
    return {
        businesses: state.businesses,
        tickets: state.tickets,
        currentUser: state.currentUser,
        quotes: state.quotes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBusinesses: () => dispatch(getBusinesses()),
        getTickets: () => dispatch(getTickets()),
        createTicket: (postBody) => dispatch(createTicket(postBody)),
        getQuotes: () => dispatch(getQuotes()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLanding)
