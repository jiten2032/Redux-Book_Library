// import { Book } from "../Book";

const initstate = {
    Book: []
};
const rootReducer = (state = initstate, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_BOOK":
            return {
                Book: [...state.Book, action.data]
            }
        case "DELET_BOOK":
            let NewBook = state.Book.filter(deletBooks => {
                return (action.Sl !== deletBooks.Sl)
            });
            return {
                Book: NewBook
            }
        case "EDIT_BOOK":
            let editedBook = state.Book.filter(editBooks => {
                return (action.Sl === editBooks.Sl)

            });
            return {
                Book:editedBook
            }

        default:

            return {

                ...state
            }
    }
}
export default rootReducer;