import { createStore } from 'redux'

const initialState = {
    count: 1,
    books: bestSellers,
    checkoutBooks: []
}

const reducer = (state, action) => {
    if (action.type === "ADD_TO_BASKET") {
        return { ...state, checkoutBooks: [...state.checkoutBooks, action.payload] }
    }

    else if (action.type === "INCREASE_QUANTITY") {
        // const newCheckoutBooks = state.checkoutBooks

        // const bookIndex = newCheckoutBooks.findIndex(book => {
        //   return book.id == action.payload
        // })

        // const updatedObj = newCheckoutBooks.filter(book => {
        //   return book.id === action.payload
        // })[0]

        // updatedObj.quantity++;

        // newCheckoutBooks[bookIndex] = updatedObj

        // console.log({ ...state, checkoutBooks: newCheckoutBooks })
        console.log("quantity is increased");
    }

    return state
}

const store = createStore(reducer, initialState)