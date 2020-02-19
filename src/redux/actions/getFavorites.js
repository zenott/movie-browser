import axios from 'axios';
import {
  FAVORITES_REQUEST,
  FAVORITES_SUCCESS,
  FAVORITES_FAILURE,
} from './types';
import { API_KEY } from '../../utils/resources';

export const getFavorites = () => async (dispatch, getState) => {
  dispatch({
    type: FAVORITES_REQUEST,
  });
  try {
    const { sessionId } = getState().auth;
    const movieUrl = `https://api.themoviedb.org/3/account/{account_id}/favorite/movies?api_key=${API_KEY}&session_id=${sessionId}`;
    const tvUrl = `https://api.themoviedb.org/3/account/{account_id}/favorite/tv?api_key=${API_KEY}&session_id=${sessionId}`;
    const [movies, tv] = await Promise.all([movieUrl, tvUrl].map(axios.get));
    console.log(movies, tv);
    dispatch({
      type: FAVORITES_SUCCESS,
      favoriteMovies: movies.data.results,
      favoriteTv: tv.data.results,
    });
  } catch (error) {
    dispatch({ type: FAVORITES_FAILURE, error });
  }
};
