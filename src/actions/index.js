
// Add a SL public transit stop
export const addStop = (stop) => {
  return {
    type: 'ADD_STOP',
    stop
  }
}

export const updateStop = (stop) => {
  return {
    type: 'UPDATE_STOP',
    stop
  }
}
