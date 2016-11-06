function visibilityFilter(state = actions.VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case actions.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  console.log('reducers', action);
  switch (action.type) {
    case actions.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case actions.TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

window.todoApp = window.Redux.combineReducers({
  visibilityFilter,
  todos
});
