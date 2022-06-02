import { GET_SERVICE, ServiceTicketAction, ServiceState, CREATE_SERVICE, UPDATE_SERVICE } from '../types';

const initialState: ServiceState = {
  ticket: []
}

export const serviceReducer = (state = initialState, action: ServiceTicketAction) => {
  switch (action.type) {
    case GET_SERVICE:
      return {
        ...state,
        ticket: action.payload,
      }
    case CREATE_SERVICE:
      return {
        ticket_create: action.payload,
      }
    case UPDATE_SERVICE:
      return {
        ticket_update: action.payload,
      }
    default:
      return state;
  }
}


