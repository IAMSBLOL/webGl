export const test = (state, action) => {
    const { payload } = action
    return Object.assign({}, state, { home: payload })
}

export const sagaFn = (state, action) => {
    const { payload } = action
    return Object.assign({}, state, { saga: payload })
}
