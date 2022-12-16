import React from "react";
import Routes from "../routes";
import "rsuite/dist/styles/rsuite-default.css";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from 'react-redux';
import * as _redux from "../Store/index";
import axios from "axios";

import store, { persistor } from "../Store/Store";

// _redux.setupAxios(axios, store);
export default () =>



<Provider store={store} >
      <PersistGate persistor={persistor} loading={"Loading"} >
      <Routes />
      </PersistGate>
    </Provider>

