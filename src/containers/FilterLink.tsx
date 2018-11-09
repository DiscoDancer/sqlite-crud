import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setVisibilityFilter } from "../actions/filterActions";
import Link from "../components/Link";
import VisibilityFilters from "../models/visibilityFilters";
import { FilterAction } from "../reducers/visibilityFilter";
import { AppState } from "../store/appState";

export interface FilterLinkProps {
    filter: VisibilityFilters;
}

const mapStateToProps = (state: AppState, ownProps: FilterLinkProps) => ({
    active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch: Dispatch<FilterAction>, ownProps: FilterLinkProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Link);
