import * as React from "react";
import FilterLink from "../containers/FilterLink";
import VisibilityFilters from "../models/visibilityFilters";

export const Footer: React.SFC = () =>  {
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
};

export default Footer;
