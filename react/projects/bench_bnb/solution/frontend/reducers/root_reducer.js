import {combineReducers} from 'redux';

import BenchesReducer from './benches_reducer';
import FiltersReducer from './filters_reducer';
import SessionReducer from './session_reducer';

export default combineReducers({
  benches: BenchesReducer,
  filters: FiltersReducer,
  session: SessionReducer
});
