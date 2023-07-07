import valuesReducer from "./reducers/values.reducer";
import { createStore } from "redux";

const store = createStore(valuesReducer);

export default store;