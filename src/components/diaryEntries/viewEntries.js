import React, { Component } from 'react';
// import '../../static/style.css';

class ViewDiaries extends Component {
    constructor() {
        super();
        this.state = {  };
    }
    
    render() { 
        return (
            <div>
                {/* <body onload='getentries(), getuser();'> */}
                <ul className="breadcrumb">
                    <li>Home</li>
                    <li>View Diary Entries</li>
                </ul>
                <div className="header">
                    <form id="getData" method="GET">
                        <button>Welcome, <span style={{color:'blue'}} id="name"></span> , You are Logged In!</button>
                    </form>
                    <div className="header-right">
                        <a className="" href="userprofile.html">View My Profile</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className="" href="creatediary.html">Create Diary Entry</a>
                        <a href="index.html">Logout</a>
                    </div>
                </div>
                <div className="container">
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>No. </th>
                                <th>Name </th>
                                <th>Due Date</th>
                                <th>Type</th>
                                <th>Purpose</th>
                                <th>Date Created</th>
                                <th>Remaining Days</th>
                                <th>Entry Action</th>
                            </tr>
                            <tr style={{color: 'red'}} id="result"></tr>
                        </tbody>
                    </table>
                        
                    <br/>
                    <div className="divider"></div>
                </div>
                <div className="page-footer">
                    <ul>
                        <li>Copyrights resevered to my Diary</li>
                        <li>
                            <a href="/">www.mydiary.com</a>
                        </li>
                    </ul>
                </div>
                {/* <script src="scripts/main.js"></script>
                    <script src="scripts/userentries.js"></script> */}
                {/* </body> */}
            </div>
        );
    }
}
 
export default ViewDiaries;
