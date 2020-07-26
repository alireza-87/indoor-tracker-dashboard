import * as action from '../actionType'

export const users = personParams => ({
    type: action.PERSON_LIST,
    payload: {
      persons: personParams.result
    },
});

export const personOfRoom = personParams => ({
    type: action.PERSON_OF_ROOM,
    payload: {
      persons: personParams.result
    },
});