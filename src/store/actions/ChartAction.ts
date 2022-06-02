import { RootState } from './../index';
import { ThunkAction } from "redux-thunk"
import db from '../../firebase/config';

export const getDataTableDoanhThu = (
  dateDonut: any,
  year: any
): ThunkAction<void, RootState, null, any> => {
  return async dispatch => {
    try {
      console.log('1')
      await db.collection("DoanhThu")
        .where("nam", '==', Number(year))
        .get().then((querySnapshot) => {
          let arr: any = [];
          querySnapshot.forEach((doc) => {
            arr.push({ ...doc.data(), ...{ id: doc.id } })
          });

          let ArrayDonut = [`tuan${dateDonut}`]
          let Objecta = arr[0]
          let select =
            ArrayDonut.reduce((r: any, e: any) =>
              Object.assign(r, Objecta[e] ? { [e]: Objecta[e] } : null), {})

          dispatch({ type: "GET_DATA_TABLE_DOANHTHU", payload: select });
        });
    } catch (err) {
      console.log(err);
    }
  }
}

export const getDataTableSoVe = (
  dateDonut: any,
  year: any
): ThunkAction<void, RootState, null, any> => {
  return async dispatch => {
    try {
      await db.collection("TicketNumber")
        .where("nam", '==', Number(year))
        .get().then((querySnapshot) => {
          let arr: any = [];
          querySnapshot.forEach((doc) => {
            arr.push({ ...doc.data(), ...{ id: doc.id } })
          });

          let ArrayDonut = [`tuan${dateDonut}`]
          let Objecta = arr[0]
          let select =
            ArrayDonut.reduce((r: any, e: any) =>
              Object.assign(r, Objecta[e] ? { [e]: Objecta[e] } : null), {})

          let ArrayDonut1 = [`tuan${Number(dateDonut)+2}`]
          let select1 =
          ArrayDonut1.reduce((r: any, e: any) =>
              Object.assign(r, Objecta[e] ? { [e]: Objecta[e] } : null), {})
              console.log(select1)
          dispatch({ type: "GET_DATA_TABLE_SOVE", payload: [select,select1] });
        });
    } catch (err) {
      console.log(err);
    }
  }
}