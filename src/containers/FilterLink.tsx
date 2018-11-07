import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ActionType } from "typesafe-actions";
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

const zebra =  bindActionCreators({
    onClick: setVisibilityFilter(VisibilityFilters.ShowActive),
}, null);

const mapDispatchToProps = (dispatch: Dispatch<FilterAction>, ownProps: FilterLinkProps) => bindActionCreators({
    onClick: setVisibilityFilter(ownProps.filter) as ActionType<any>,
}, dispatch);

// const mapDispatchToProps = (dispatch: Dispatch, ownProps: FilterLinkProps) => ({
//     onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
// });

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Link);
