
import { persistReducer,persistStore } from "redux-persist";
import { createStore} from 'redux';
import * as homeReducer from "../../Store/_redux/home/homeSlice";
import storage from "redux-persist/lib/storage" 
 

export const homeeReducer = persistReducer({ storage, key: "state-profile"},homeReducer.Slice.reducer)
const homestore = createStore(homeeReducer);
persistStore(homestore);









 