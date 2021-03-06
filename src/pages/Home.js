import React, { Component } from 'react';
import Header from "../components/Header";
import API from "../utils/API";
import MyTable from "../components/Table";


class Home extends Component {
    state = {
        search: "",
        users: [],
        toDisplay: [],
        sort: "none"
    };

    handleInput = event => {
      this.setState({ search: event.target.value });
    };

    componentDidMount() {
        API.getUsers()
            .then(({ data }) => {
                this.setState({
                    users: data.results,
                    toDisplay: data.results
                });
            })
            .catch(err => console.error(err));
    }
    
    handleClick = () => {
        if (this.state.sort === "none" || this.state.sort === "down") {
            this.setState({
                sort: "up",
                toDisplay: this.state.toDisplay.sort((a, b) => a.registered.age - b.registered.age)
            });
        } else {
            this.setState({
                sort: "down",
                toDisplay: this.state.toDisplay.sort((a, b) => b.registered.age - a.registered.age)
            });
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        
        this.setState({
            toDisplay: this.state.users.filter(user => user.name.first.toLowerCase().includes(this.state.search.toLowerCase()) || user.name.last.toLowerCase().includes(this.state.search.toLowerCase()))
        });
    }


    render() {
        return (
            <div>
                <Header />
                <MyTable toDisplay={this.state.toDisplay} handleSubmit={this.handleSubmit} handleInput={this.handleInput} handleClick={this.handleClick} />
            </div>
        );
    }
}

    export default Home; 