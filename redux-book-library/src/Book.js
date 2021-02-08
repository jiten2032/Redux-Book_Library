import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Book extends Component {

    render() {
        console.log(this.props);
        const { Book } = this.props;
        let BookList = Book.length ? (
            Book.map(Books => {
                return (
                    <div className="container mt-2" key={Books.Sl}  >


                        <table className="table table-hover">
                            <tbody>
                                <tr>
                                    <th scope="row" className="col-md-2">{Books.Sl}</th>
                                    <td className="col-md-2">{Books.BookName}</td>
                                    <td className="col-md-2">{Books.BookAuthor}</td>
                                    <td className="col-md-2">{Books.BookGeners}</td>
                                    <td className="col-md-1">{Books.BookPublishedYear}</td>
                                    <td className="col-md-2">
                                        <button className="btn btn-primary" onClick={() => { this.props.editBook(Books.Sl) }}>Edit</button>
                                    </td>
                                    <td className="col-md-2">
                                        <button onClick={() => { this.props.deletBook(Books.Sl) }} className="btn btn-primary">Delet</button>
                                    </td>

                                </tr>
                            </tbody>

                        </table>
                    </div>
                )
            })
        ) : (
                <div className="alert alert-danger text-center container" role="alert">
                    Please add your Book !!
                </div>
            )

        return (
            <div>
                <div className="container mt-5 ">
                    <table id="table" className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col-md-2">Sl. No.</th>
                                <th scope="col-md-3">Name</th>
                                <th scope="col-md-3">Author</th>
                                <th scope="col-md-2">Geners</th>
                                <th scope="col-md-2">Published Year</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                {BookList}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        Book: state.Book
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletBook: (id) => {
            dispatch({
                type: 'DELET_BOOK', Sl: id
            })
        },
        editBook: (id) => {
            dispatch({
                type: 'EDIT_BOOK', Sl: id
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Book);
