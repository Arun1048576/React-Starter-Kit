export const reducerCreator  = (initialState, funcMap)=> {
  return (state = initialState, params) => {
    if(params && params.type) {
      const reducerHandler = funcMap[params.type]      
      return reducerHandler ? reducerHandler(state, params.payload) : state
    }
  }
}
