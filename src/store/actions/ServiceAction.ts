import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import db from '../../firebase/config';
import { CREATE_SERVICE, GET_SERVICE, ServiceTicketAction, UPDATE_SERVICE } from '../types';


export const getService = ({
  valueSreach = ''
}: any): ThunkAction<void, RootState, null, ServiceTicketAction> => {
  return async dispatch => {
    try {
      await db.collection("Service")
        .orderBy("BookingCode")
        .startAt(valueSreach)
        .endAt(valueSreach + "\uf8ff")
        .get().then((querySnapshot) => {
          let arr1: any = [];
          querySnapshot.forEach((doc) => {
            arr1.push({ ...doc.data(), ...{ id: doc.id } })
          });
          dispatch({ type: GET_SERVICE, payload: arr1 });
        });
    } catch (err) {
      console.log(err);
    }
  }
}

// createService
export const createService = ({
  BookingCode,
  TicketName,
  TicketPrice,
  ComboPrice,
  DateUsed,
  DateEnd,
  Status,
}: any): ThunkAction<void, RootState, null, ServiceTicketAction> => {
  return async dispatch => {
    console.log('1')
    try {
      const TicketPriceNumber = Number(TicketPrice)
      await db.collection("Service").add({
        BookingCode,
        TicketName,
        TicketPrice: TicketPriceNumber,
        ComboPrice,
        DateUsed,
        DateEnd,
        Status,
      })
        .then((docRef) => {
          dispatch({ type: CREATE_SERVICE, payload: docRef.id });
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });

    } catch (err) {
      console.log(err);
    }
  }
}

export const updateService = ({
  BookingCode,
  TicketName,
  TicketPrice,
  ComboPrice,
  DateUsed,
  DateEnd,
  Status,
}: any, id: string): ThunkAction<void, RootState, null, ServiceTicketAction> => {
  return async dispatch => {
    try {
      const TicketPriceNumber = Number(TicketPrice)
      await db.collection("Service").doc(id).update({
        BookingCode,
        TicketName,
        TicketPrice: TicketPriceNumber,
        ComboPrice,
        DateUsed,
        DateEnd,
        Status,
      })
        .then(() => {
          dispatch({ type: UPDATE_SERVICE, 
            payload:{BookingCode,TicketName,TicketPrice: TicketPriceNumber,ComboPrice, DateUsed, DateEnd, Status} 
          });
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
        });

    } catch (err) {
      console.log(err);
    }
  }
}