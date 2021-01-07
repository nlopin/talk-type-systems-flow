// @flow
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH':
            return { isFetching: true }
        case 'FETCH_SUCCESS':
            return { isFetching: false, data: action.payload }
        case 'FETCH_FAIL':
            return { isFetching: false, error: action.error, data: action.payload }
    }
}



// type Success = { success: true, value: boolean };
// type Failed  = { error: true, message: string };
//
// function handleResponse(response:  Success | Failed) {
//     if (response.success) {
//         // $ExpectError
//         var value: boolean = response.value; // Error!
//     }
// }