import { StateType } from "typesafe-actions";
import rootReducer from "../reducers/root-reducer";

export type AppState = StateType<typeof rootReducer>;
