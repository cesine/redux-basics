window.actions = {
   ADD_TODO: 'ADD_TODO',
   TOGGLE_TODO: 'TOGGLE_TODO',
   SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
  /*
   * other constants
   */
  VisibilityFilters: {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  },
  /*
   * action creators
   */
  addTodo: function(text) {
    console.log('addTodo', text);
    return { type: ADD_TODO, text }
  },
  toggleTodo: function(index) {
    return { type: TOGGLE_TODO, index }
  },
  setVisibilityFilter: function(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
  }
};
