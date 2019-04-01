export const test = (state, action) => {
    const { payload } = action
    return Object.assign({}, state, { home: payload })
}
