import { combineReducers } from "redux";
import { reducer as foodReducer } from "./module/foodList";
import { oneFoodReducer } from "./module/oneFood";
import { CartReducer as cart } from "./module/ui/component/SideCart";
import { userReducer as user } from "./module/user";

export default combineReducers({
  foods: foodReducer,
  oneFood: oneFoodReducer,
  cart,
  user,
});
