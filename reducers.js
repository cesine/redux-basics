/**
 * Reducers specify how the application's state changes in response to something that happened
 * - entities to reference each other.
 * - keep your state as normalized as possible, without any nesting
 * todosById: { id -> todo } would be a better idea
 *
 * Things you should never do inside a reducer:

    Mutate its arguments;
    Perform side effects like API calls and routing transitions;
    Call non-pure functions, e.g. Date.now() or Math.random().
 */
import {
  VisibilityFilters
} from './actions'

/**
 * - keep your state as normalized as possible, without any nesting
 * todosById: { id -> todo } would be a better idea
 */
const initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}

function todoApp(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }

  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}
