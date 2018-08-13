import StorageService from '../../lib/StorageService'

// ACTIONS
const LOGOUT         = 'bde/auth/onLogout'
// ASYNC ACTIONS
const LOGIN_REQUEST  = 'bde/auth/LOGIN_REQUEST'
const LOGIN_SUCCESS  = 'bde/auth/LOGIN_SUCCESS'
const LOGIN_FAILURE  = 'bde/auth/LOGIN_FAILURE'
const SANITIZE_STATE = 'bde/auth/SANITIZE_STATE'


const initialState = {
  valid: false,
  user: {},
  token: null,

  isLoading: false
}

export default function reducer (state = initialState, action = {}) {

  switch (action.type) {

    case LOGIN_REQUEST:
      return { ...state,
        isLoading: true
      }

    case LOGIN_SUCCESS:

      return {
        ...state,
        user: action.user,
        token: action.token,
        valid: true,
        isLoading: false
      }

    case LOGIN_FAILURE:
      return { 
        ...state,
        errorMsg: action.errorMsg, 
        isLoading: false
      } 

    case SANITIZE_STATE:
      delete state.navigators

      return { 
        ...state
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


export function onLoginRequest () {
  return { type: LOGIN_REQUEST,  }
}

export function onLoginSuccess (data) {
  console.log("onLoginSuccess")
  return { 
    type: LOGIN_SUCCESS,
    user: data.user,
    token: data.token
  }
}

export function onLoginFailure (data) {
  return { 
    type: LOGIN_FAILURE,
    errorMsg: data.response.status == 401 ? 
    'Usuário não encontrado. Por favor, insira credenciais válidas' :
    'Error no servidor. Por favor, contacte o suporte'
  }
}

export function onLogout () {
  return {
    type: onLogout
  }
}

export function sanitizeState () {
  return {
    type: SANITIZE_STATE
  }
}

// THUNK CREATORS

export function saveSession (data) {

  return () => {

    return StorageService.set('session', data)
  }
}

export function _onLogin (credentials) {

  return (dispatch, api) => {

    dispatch(onLoginRequest())

    return api.postLogin(credentials)
          .then( 
            data   => dispatch(onLoginSuccess(data.data)),
            error  => dispatch(onLoginFailure(error))
          )
  }
}



