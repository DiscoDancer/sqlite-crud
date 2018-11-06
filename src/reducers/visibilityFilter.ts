import { ActionType, getType } from "typesafe-actions";
import * as filterActions from "../actions/filterActions";
import VisibilityFilters from "../models/visibilityFilters";

export type FilterAction = ActionType<typeof filterActions>;

const visibilityFilter = (state = VisibilityFilters.ShowAll, action: FilterAction) => {
    switch (action.type) {
        case getType(filterActions.setVisibilityFilter):
            return action.payload;
        default:
            return state;
    }
};

export default visibilityFilter;
