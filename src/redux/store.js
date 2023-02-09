import { createStore } from "redux";
import movie from "./reducer/movie";

const store = createStore(
    movie, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  export default store