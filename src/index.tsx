import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import rootReducer from "./reducers";

const root = document.createElement("div");
document.body.appendChild(root);

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>
    , root);
