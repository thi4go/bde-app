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
        data: action.battles,
        hashedData: action.hashedBattles
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


// ACTION CREATORS

export function battlesRequest () {
  return { type: BATTLES_REQUEST,  }
}

export function battlesSuccess (data) {
  return { 
    type: BATTLES_SUCCESS,
    battles: data,
    hashedBattles: battlesToHash(data)
    
  }
}

export function battlesFailure (data) {
  return { 
    type: BATTLES_FAILURE,
    error: data
  }
}

export function _battles () {
  return function (dispatch, getState, api) {
    dispatch(battlesRequest())
    return api.getBattles()
          .then ( 
            data   => dispatch(battlesSuccess(data.data)),
            error  => dispatch(battlesFailure(error))
          )
  }
}

// AUX FUNCTIONS

function battlesToHash (battles) {
  let hash = {}
  for (battle of battles) {
    hash[battle._id] = battle
  }
  return hash
}




