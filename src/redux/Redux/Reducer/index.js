import changeNumber from "./IncDecrement";

import { combineReducers } from "redux";

const rootReducer = combineReducers({

    changeNumber: changeNumber
})

export default rootReducer;