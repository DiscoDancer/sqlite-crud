import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions/filterActions";
import Link from "../components/Link";
import { AppState } from "../models/appState";
import VisibilityFilters from "../models/visibilityFilters";

export interface FilterLinkProps {
    filter: VisibilityFilters;
}

const mapStateToProps = (state: AppState, ownProps: FilterLinkProps) => ({
     active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch: any, ownProps: FilterLinkProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Link);
