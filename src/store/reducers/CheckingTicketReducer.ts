import { GET_CHECKING_MN, GET_CHECKING_SELECT, TicketManageAction, TicketState, TicketStateSelect } from '../types';

const initialState: TicketState = {
  ticket: [],
  loaded: false
}

export const ticketCheckReducer = (state = initialState, action: TicketManageAction) => {
  switch (action.type) {
    case GET_CHECKING_MN:
      return {
        ...state,
        succes: true,
        ticket: action.payload,
        loaded: true
      }
    default:
      return state;
  }
}



const initialStateSelect: TicketStateSelect = {
  ticketSelect: []
}
export const ticketCheckSelectReducer = (
  state = initialStateSelect,
  action: TicketManageAction
) => {
  switch (action.type) {
    case GET_CHECKING_SELECT:
      return {
        ...state,
        ticketSelect: action.payload,
      }
    default:
      return state;
  }
}