// ACTIONS
const SET_BATTLES = 'bde/battles/SET_BATTLES'

const BATTLES_REQUEST = 'bde/battles/BATTLES_REQUEST'
const BATTLES_SUCCESS = 'bde/battles/BATTLES_SUCCESS'
const BATTLES_FAILURE = 'bde/battles/BATTLES_FAILURE'



export default function reducer (state = {}, action = {}) {

  switch (action.type) {
    case SET_BATTLES:
      return { 

      }

    case BATTLES_REQUEST:
      return { 
        ...state,
        isLoading: true
      }
    

    case BATTLES_SUCCESS:
      return { 
        ...state,
        isLoading: false,
        data: action.battles
      }
    

    case BATTLES_FAILURE:
      return { 
        ...state,
        isLoading: false
      }
    

    default:
      return state
  }

}


function battlesToHash (battles) {
  let hash = {}
  for (battle of battles) {
    hash[battle._id] = battle
  }
  return hash
}
// ACTION CREATORS

export function battlesRequest () {
  return { type: BATTLES_REQUEST,  }
}

export function battlesSuccess (data) {
  console.log("BORA")
  console.log(battlesToHash(data.data))
  return { 
    type: BATTLES_SUCCESS,
    battles: battlesToHash(data.data)
  }
}

export function battlesFailure (data) {
  return { 
    type: BATTLES_FAILURE,
    error: data
  }
}


export function battles () {

  return function (dispatch, getState, api) {

    dispatch(battlesRequest())

    return api.getBattles()
          .then ( 
            data   => dispatch(battlesSuccess(data)),
            error  => dispatch(battlesFailure(error))
          )
  }
}


