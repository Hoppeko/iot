import { connect } from 'react-redux';

import { fetchBench } from '../../actions/bench_actions';
import { selectBench } from '../../reducers/selectors';

import BenchShow from './bench_show';

const mapStateToProps = (state, {match}) => {
  const benchId = parseInt(match.params.benchId);
  const bench = selectBench(state, match.params.benchId);
  return {
    benchId,
    bench,
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBench: id => dispatch(fetchBench(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchShow);
