const initialState = {
  results: [],
}

const SET_RESULTS = 'SET_RESULTS'

export function setResults(results) {
  return {
    type: SET_RESULTS,
    payload: results,
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_RESULTS:
      return { ...state, results: action.payload }
    default:
      return state
  }
}
