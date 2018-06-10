import axios from 'axios'

// ACTIONS
const SET_VALID     = 'bde/auth/SET_VALID'
const SET_ISLOADING = 'bde/auth/SET_ISLOADING'
const LOGOUT        = 'bde/auth/LOGOUT'
// ASYNC ACTIONS
const LOGIN_REQUEST = 'bde/auth/LOGIN_REQUEST'
const LOGIN_SUCCESS = 'bde/auth/LOGIN_SUCCESS'
const LOGIN_FAILURE = 'bde/auth/LOGIN_FAILURE'



const initialState = {
  valid: false,
  user: {init: 'as'},
  token: null,
  isLoading: false
}


export default function reducer (state = initialState, action = {}) {

  switch (action.type) {
    case SET_VALID:
      return { ...state, valid: !state.valid}

    case LOGIN_REQUEST:
      return { ...state,
        isLoading: true
      }

    case LOGIN_SUCCESS:
      return { ...state,
        user: action.user,
        token: action.token,
        isLoading: false
      }

    case LOGOUT:
      return initialState

    default:
      return state
  }

}


// ACTION CREATORS

export function isAuthValid (state) {
  return state.valid
}


export function setValid () {
  return { type: SET_VALID }
}

export function requestLogin () {
  return { type: LOGIN_REQUEST,  }
}

export function loginSuccess (user, token) {
  return { 
    type: LOGIN_SUCCESS,
    user: user,
    token: token
  }
}

export function logout () {
  return {
    type: LOGOUT
  }
}

// THUNK CREATOR

// export function login (credentials) {

//   return function (dispatch) {

//     dispatch(requestLogin())
    
//     return axios.get('http://localhost:8000/users')
//       .then ( response => response.json(),
//               error    => console.log('err')
//       .then( json => dispatch(loginSuccess(json)))
//     )
//   }
// }



