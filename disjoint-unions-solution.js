// @flow
type Car = {
    id: string
}

type State = {
    isFetching: boolean,
    data?: Car,
    error?: Error
}

type FetchAction = { type: 'FETCH' }
type SuccessAction = { type: 'FETCH_SUCCESS', payload: Car }
type FailAction = { type: 'FETCH_FAIL', error: Error }

type Action = FetchAction | SuccessAction | FailAction;

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'FETCH':
            return { isFetching: true }
        case 'FETCH_SUCCESS':
            return { isFetching: false, data: action.payload }
        case 'FETCH_FAIL':
            return { isFetching: false, error: action.error }
    }
}