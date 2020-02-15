import { combineReducers } from 'redux';
import { lists } from './lists';
import { details, detailsIsLoading, detailsError } from './details';
import { rated } from './rated';
import { favorites } from './favorites';
import { accountDetails } from './accountDetails';
import { auth } from './auth';
import { submitRating } from './submitRating';
import { addFavorite } from './addFavorite';

export default combineReducers({
  lists,
  details,
  detailsIsLoading,
  detailsError,
  auth,
  rated,
  favorites,
  accountDetails,
  submitRating,
  addFavorite,
});
