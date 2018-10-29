import { ActionTypes, BaseAction, SetVisibilityFilterAction } from "../actions/actions";
import VisibilityFilters from "../models/visibilityFilters";

// 1 reducer <--> 1 part of state.
// 1 reducer <--> 1+ action types
// ignores other parts of state
export default function visibilityFilter(state = VisibilityFilters.ShowAll, action: BaseAction): VisibilityFilters {
    switch (action.type) {
        case ActionTypes.SetVisibilityFilter:
            const filterAction = action as SetVisibilityFilterAction;
            return filterAction.filter;
        default:
            return state;
    }
}
