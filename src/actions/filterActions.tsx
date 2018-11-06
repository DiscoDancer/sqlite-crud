import { createAction } from "typesafe-actions";
import VisibilityFilters from "../models/visibilityFilters";

export const setVisibilityFilter = createAction("visibilityFilter/set", (resolve) => {
    return (filter: VisibilityFilters) => resolve(filter);
});
