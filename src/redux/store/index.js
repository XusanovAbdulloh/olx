import { createStore } from "redux";
import mainReducer from "../reducers/main-reducers";

 const store = createStore(mainReducer);

  export{ store }