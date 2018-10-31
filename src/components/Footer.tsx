import * as React from "react";
import FilterLink from "../containers/FilterLink";
import VisibilityFilters from "../models/visibilityFilters";

export default function Footer() {
    return (
        <div>
            <span>Show: </span>
            <FilterLink filter={VisibilityFilters.ShowAll}>
                All
            </FilterLink>
            <FilterLink filter={VisibilityFilters.ShowActive}>
                Active
            </FilterLink>
            <FilterLink filter={VisibilityFilters.ShowComplete}>
                Completed
            </FilterLink>
        </div>
    );
}
