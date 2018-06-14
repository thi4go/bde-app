import StorageService from '../../lib/StorageService'

// ACTIONS
const LOGOUT        = 'bde/auth/LOGOUT'
// ASYNC ACTIONS
const LOGIN_REQUEST = 'bde/auth/LOGIN_REQUEST'
const LOGIN_SUCCESS = 'bde/auth/LOGIN_SUCCESS'
const LOGIN_FAILURE = 'bde/auth/LOGIN_FAILURE'
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


export function loginRequest () {
  return { type: LOGIN_REQUEST,  }
}

export function loginSuccess (data) {
  return { 
    type: LOGIN_SUCCESS,
    user: data.user,
    token: data.token
  }
}

export function loginFailure (data) {
  return { 
    type: LOGIN_FAILURE,
    errorMsg: data.response.status == 401 ? 
    'Usuário não encontrado. Por favor, insira credenciais válidas' :
    'Error no servidor. Por favor, contacte o suporte'
  }
}

export function logout () {
  return {
    type: LOGOUT
  }
}

export function sanitizeState () {
  return {
    type: SANITIZE_STATE
  }
}

// THUNK CREATOR

export function saveSession (data) {

  return function (dispatch, getState, api) {

    return StorageService.set('session', data.data)
           .then (
             data  => dispatch(loginSuccess(data)),
             error => dispatch(loginFailure(error))
           )
  }
}

export function login (credentials) {

  return function (dispatch, getState, api) {

    dispatch(loginRequest())

    return api.postLogin(credentials)
          .then ( 
            data   => dispatch(saveSession(data)),
            error  => dispatch(loginFailure(error))
          )
  }
}



