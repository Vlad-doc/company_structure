import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { apiActions } from "store/actions";

const useGetApiData = (endpoint) => {
  const state = useSelector(state => state.api[endpoint])
  const dispatch = useDispatch()

  const fetchingData = useCallback(() => dispatch(apiActions.fetch(endpoint)), [endpoint, dispatch])

  return { state, fetchingData }
};

export default useGetApiData