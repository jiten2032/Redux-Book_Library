
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Addbook extends Component {
    state = {
        Name: "",
        Author: "",
        Genres: "",
        Year: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    }



    handleSubmit = (e) => {
        e.preventDefault();
        const BookName = this.state.Name;
        const BookAuthor = this.state.Author;
        const BookGeners = this.state.Genres;
        const BookPublishedYear = this.state.Year;

        const data = {
            Sl: Math.random(),
            BookName,
            BookAuthor,
            BookGeners,
            BookPublishedYear

        }
        this.props.dispatch({ type: 'ADD_BOOK', data });

        this.setState({
            Name: '',
            Author: '',
            Genres: '',
            Year: ''
        })


    }

    render() {

        return (

            <div className="addbook">
                <div className="container mt-5 text-primary">
                    <form id="form" onSubmit={this.handleSubmit} >
                        <div className="form-group row my-2">
                            <label htmlFor="Name" className="col-sm-2 col-form-label">Book Name :</label>
                            <div className="col-sm-10 ">
                                <input type="text" value={this.state.Name} className="form-control" id="Name" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group row my-2">
                            <label htmlFor="Author" className="col-sm-2 col-form-label">Book Author :</label>
                            <div className="col-sm-10">
                                <input type="text" value={this.state.Author} className="form-control" id="Author" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group row my-2">
                            <label htmlFor=" Genres" className="col-sm-2 col-form-label" >Book Geners :</label>
                            <div className="col-sm-10">
                                <input type="text" value={this.state.Genres} className="form-control" id="Genres" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group row my-2">
                            <label htmlFor="Year" className="col-sm-2 col-form-label">Book Published Year :</label>
                            <div className="col-sm-10">
                                <input type="number" value={this.state.Year} className="form-control" id="Year" onChange={this.handleChange} />
                            </div>
                        </div>


                        <div className="form-group row my-5">
                            <div className="col-sm-10">
                                <button type="submit" id="Submit" className="btn btn-primary">Add Book</button>
                            </div>
                        </div>
                    </form>
                </div>
                <hr className="mt-5"></hr>
            </div>
        )
    }
}


export default connect()(Addbook);
// Refs provide a way to access DOM nodes or React elements created in the render method.