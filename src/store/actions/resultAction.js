import * as action from '../actionType'

export const result = data => ({
  type:action.RESULT,
  payload:data
})

export const clearResult = () => ({
  type:action.CLEAR_RESULT
})
