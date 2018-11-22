//Actions
export const TEMP_REQUESTED = 'temp/TEMP_REQUESTED'
export const GET_TEMP = 'counter/GET_TEMP'

//State
const initialState = {
  temp: 0,
  isLoading: false
}

//Reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case TEMP_REQUESTED:
      console.log(state);
      return {
        ...state,
        isLoading: action.isLoading
      }

    case GET_TEMP:
      return {
        ...state,
        temp: action.temp
      }

    default:
      return state
  }
}


//Actions creators
export const isLoading = (isLoading) => {
  return {TEMP_REQUESTED,isLoading}
}

export const getTemp = () => {

  return dispatch => {
    dispatch({
      type: TEMP_REQUESTED,
      isLoading:true
    })

    return setTimeout(() => {
        /*fetch(`https://samples.openweathermap.org/data/2.5/weather?q=London&appid=b6907d289e10d714a6e88b30761fae22`, {
        mode: 'no-cors' // 'cors' by default
      })*/
      fetch('./data.json')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        console.log(data)
      })
      console.log("Called");
      dispatch({
        type: GET_TEMP,
        temp: 30
      })
       dispatch({
        type: TEMP_REQUESTED,
        isLoading:false
      })
    }, 3000)
  }
}


/*method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header*/