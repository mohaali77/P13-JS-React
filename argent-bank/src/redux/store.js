import { createStore } from "redux";
import rootReducer from "./reducers"; // Créez votre réducteur (rootReducer)

const store = createStore(rootReducer);

export default store;
