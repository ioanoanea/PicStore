import {createStore} from "redux";
import rootReducer from "../reducers/rootReducer";

const appStore = createStore(rootReducer);
export default appStore;
