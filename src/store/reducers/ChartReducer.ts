

interface doanhthuState {
  dataTable: Array<number>;
  dataTableSoVe: Array<number>;
}

const initialState1: doanhthuState = {
  dataTable: [],
  dataTableSoVe:[],
};

export const doanhthuReducer = (state = initialState1, action: any) => {
  switch (action.type) {
    case "GET_DATA_TABLE_DOANHTHU": {
      const newDataTable = action.payload;

      return {
        ...state,
        dataTable: newDataTable,
      };
    }
    case "GET_DATA_TABLE_SOVE": {
      const newDataTable = action.payload;

      return {
        ...state,
        dataTableSoVe: newDataTable,
      };
    }
    default: {
      return state;
    }
  }
  // return state
};
