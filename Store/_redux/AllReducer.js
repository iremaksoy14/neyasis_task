
import { persistReducer,persistStore } from "redux-persist";
import { createStore} from 'redux';
import * as profileReducer from "../../Store/_redux/profile/profileSlice";
import storage from "redux-persist/lib/storage" 
 
export const profileeReducer = persistReducer({ storage, key: "state-profile"},profileReducer.Slice.reducer)
const profilestore = createStore(profileeReducer);
persistStore(profilestore);








 