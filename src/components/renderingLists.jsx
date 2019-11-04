import React, {Component} from 'react';
import PropTypes from 'prop-types';

class RenderingLists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [
                {employeeName: "Kedar", position: "Chief Technical Officer"},
                {employeeName: "Vishal", position: "Senior Team Lead"},
                {employeeName: "Som", position: "Senior Team Lead"},
                {employeeName: "Surya", position: "Senior Software Engineer"},
                {employeeName: "Anil", position: "Test Engineer"},
            ]
        }
    }

    render() {
        return (
            <div>
                <p><b>Rendering Lists</b></p>
                <div>
                    <h3>Ratings:</h3>
                    {
                        ["Super", "Good", "Better", "Bad"].map((rating) =>
                            <p>{rating}</p>
                        )
                    }
                    <h3>Employees:</h3>
                    {
                        this.state.employees.map((employee) =>
                            <div>
                                <p><b>Employee Name:</b> {employee.employeeName}</p>
                                <p><b>Employee Position:</b> {employee.position}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

RenderingLists.propTypes = {};

export default RenderingLists;
