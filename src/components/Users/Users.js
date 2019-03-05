import React, { Component } from "react";
import './Users.css';

class Users extends Component {
    constructor() {
        super();
        this.state = {
            data: [],       //for getting the data from API
            loading: true   //to display the (loading) text
        };
    }


    componentDidMount() {

        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(json  => this.setState({
                data: json,loading: false }),
            );
    }

    render(){

        let loading  ;
        if(this.state.loading){
            loading = <span>(loading) </span>
        }

        return (
            <div >

                <h1> Users {loading}</h1>

                <div className="user-list-container">

                    {this.state.data.map(users =>(
                        <div key={users.username} style={{paddingTop: "2px", paddingBottom: "2px"}}>

                            <a className="list-of-user">

                                <span id="name-of-user">
                                {users.name}
                                </span>

                                <p className="user-detail-wrapper">           {/* Displays the details of users */}
                                    <p className="user-detail-info">
                                        Street &nbsp; <span style={{fontWeight: "500"}}>{users.address.street} </span><br/>

                                        Suite &nbsp; <span style={{fontWeight: "500"}}>{users.address.suite} </span><br/>

                                        City &nbsp; <span style={{fontWeight: "500"}}>{users.address.city} </span><br/>

                                        Zipcode &nbsp; <span style={{fontWeight: "500"}}>{users.address.zipcode} </span><br/>
                                    </p>
                                </p>


                            </a>


                            <span id="username">  {/* Displays the username of users */}
                                ({users.username})
                        </span>

                        </div>
                    ))}


                </div>

            </div>
        );
    }
}
export default Users;