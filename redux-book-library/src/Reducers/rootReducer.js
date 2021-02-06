import { Book } from "../Book";

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

        default:

            return {

                ...state
            }
    }








}
export default rootReducer;