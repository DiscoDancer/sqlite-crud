import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { setVisibilityFilter } from "../actions/filterActions";
import Link from "../components/Link";
import { AppState } from "../models/appState";
import VisibilityFilters from "../models/visibilityFilters";
import { FilterAction } from "../reducers/visibilityFilter";

export interface FilterLinkProps {
    filter: VisibilityFilters;
}

const mapStateToProps = (state: AppState, ownProps: FilterLinkProps) => ({
    active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch: Dispatch<FilterAction>, ownProps: FilterLinkProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

// const mapDispatchToProps = (dispatch: Dispatch<FilterAction>, ownProps: FilterLinkProps) => bindActionCreators({
//     onClick: setVisibilityFilter,
// }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Link);
