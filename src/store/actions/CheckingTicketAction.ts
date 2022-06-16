import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import db from '../../firebase/config';
import { GET_CHECKING_MN, GET_CHECKING_SELECT, TicketManageAction } from '../types';


export const getCheckingTicket = (
  usageStatus: number,
  dayStart: any,
  dayEnd: any,
  valueSreach: string,
  select: string
): ThunkAction<void, RootState, null, TicketManageAction> => {
  return async dispatch => {
    try {
      const statusNumber = Number(usageStatus)
      const DateStart = new Date(dayStart)
      const DateEnd = new Date(dayEnd)

      let arr1: any = [];
      let arr2: any = [];
      let arr3: any = [];
      let arr4: any = [];

      await db.collection("CheckingTicket")
        .where("DateUsed", '>=', DateStart)
        .where("DateUsed", DateEnd.getFullYear() <= 2000 ? '>=' : '<=', DateEnd)
        .get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            arr1.push({ ...doc.data(), ...{ id: doc.id } })
          });
        });

      await db.collection("CheckingTicket")
        .orderBy("TicketNember")
        .startAt(valueSreach)
        .endAt(valueSreach + "\uf8ff")
        .get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            arr2.push({ ...doc.data(), ...{ id: doc.id } })
          });
        });

      await db.collection("CheckingTicket")
        .where('UsageStatus', statusNumber === 0 ? '>=' : '==', statusNumber)
        .get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            arr3.push({ ...doc.data(), ...{ id: doc.id } })
          });
        });

      await db.collection("CheckingTicket")
        .where('EventName', select === '0' ? '!=' : '==', select)
        .get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            arr4.push({ ...doc.data(), ...{ id: doc.id } })
          });
        });

      const arr12 = await arr1.filter((o: any) => arr2.some(({ id }: any) => o.id === id));
      const arr34 = await arr3.filter((o: any) => arr4.some(({ id }: any) => o.id === id));
      const arrAll = await arr12.filter((o: any) => arr34.some(({ id }: any) => o.id === id));

      dispatch({ type: GET_CHECKING_MN, payload: arrAll });
    } catch (err) {
      console.log(err);
    }
  }
}


export const getCheckingTicketCheckbox = (): ThunkAction<void, RootState, null, TicketManageAction> => {
  return async dispatch => {
    try {
      await db.collection("CheckingTicket")
        .get().then((querySnapshot) => {
          let arr1: any = [];
          querySnapshot.forEach((doc) => {
            const { EventName } = doc.data()
            arr1.push(EventName)
          });

          let newArr: any = []  // Loại bỏ các phần tử trùng trong arr
          newArr = arr1.filter((item: string) => {
            return newArr.includes(item) ? '' : newArr.push(item)
          })
          dispatch({ type: GET_CHECKING_SELECT, payload: newArr });
        });
    } catch (err) {
      console.log(err);
    }
  }
}