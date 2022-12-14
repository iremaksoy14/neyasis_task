
import { persistReducer,persistStore } from "redux-persist";
import { createStore} from 'redux';
import * as profileReducer from "../../Store/_redux/profile/profileSlice";
import * as homeReducer from "../../Store/_redux/home/homeSlice";

import storage from "redux-persist/lib/storage" 
 
export const profileeReducer = persistReducer({ storage, key: "state-profile"},profileReducer.Slice.reducer)
export const homeeReducer = persistReducer({ storage, key: "state-profile"},homeReducer.Slice.reducer)

const profilestore = createStore(profileeReducer);
const homestore = createStore(homeeReducer);

persistStore(profilestore);
persistStore(homestore);









 