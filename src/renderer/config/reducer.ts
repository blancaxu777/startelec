export interface Istate {
  title: string
}
export interface Iaction {
  type: string
  [key: string]: any
}
export const defaultState: Istate = {
  title: 'Welcome to Startelec',
}
export const reducer: (state: Istate, action: Iaction) => Istate = (state, action) => {
  switch (action.type) {
    case 'changeTitle': {
      return {
        ...state,
        title: action.title,
      }
    }

    default:
      return state
  }
}
