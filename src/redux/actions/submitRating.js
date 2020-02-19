import axios from 'axios';
import {
  SUBMIT_RATING_SUCCESS,
  SUBMIT_RATING_REQUEST,
  SUBMIT_RATING_FAILURE,
} from './types';
import { API_KEY } from '../../utils/resources';

export const submitRating = ({ id, mediaType, rating }) => async (
  dispatch,
  getState,
) => {
  dispatch({ type: SUBMIT_RATING_REQUEST, value: true });
  try {
    const { sessionId, guest } = getState().auth;
    const url = guest
      ? `https://api.themoviedb.org/3/${mediaType}/${id}/rating?api_key=${API_KEY}&guest_session_id=${sessionId}`
      : `https://api.themoviedb.org/3/${mediaType}/${id}/rating?api_key=${API_KEY}&session_id=${sessionId}`;
    const data = { value: rating };
    const options = {
      url,
      data,
      method: 'post',
      headers: { 'content-type': 'application/json;charset=utf-8' },
    };
    const response = (await axios(options)).data;
    console.log(response);
    dispatch({ type: SUBMIT_RATING_SUCCESS, rating });
  } catch (error) {
    dispatch({ type: SUBMIT_RATING_FAILURE, error });
  }
};
