import React from "react";
import MenuLayout from "../Layout/MenuLayout";
import { NavLink } from "react-router-dom";
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function ClickableName(props) {
    return (
        <NavLink
            to={`/employee/${props.node.data.id}`}
            >
            {props.value}
        </NavLink>
    );
}

function ClickableReportName(props) {
    const report = props.node.data.report;
    return report ? (
        <NavLink
            to={`/employee/${report.id}`}
            >
            {props.value}
        </NavLink>
    ) : (
        <>
            No manager
        </>
    );
}


class EmployeeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                { headerName: "Full name", field: "full_name", cellRenderer: "clickableName" },
                { headerName: "Report", field: "report.full_name", cellRenderer: "clickableReportName" },
                { headerName: "Location", field: "location" },
                { headerName: "Total Yearly Compensation", field: "total_yearly_compensation" },
                { headerName: "Base Salary", field: "base_salary" },
                { headerName: "Stock Grant", field: "stock_grant" },
                { headerName: "Bonus", field: "bonus" },
                { headerName: "Years of Experience", field: "years_of_experience" },
                { headerName: "Years at Company", field: "years_at_company" },
                { headerName: "Gender", field: "gender" },
            ],
            frameworkComponents: {
                clickableName: ClickableName,
                clickableReportName: ClickableReportName,
            },
            employeesData: [],
        };
    }
    
    componentDidMount() {
        const {
            match: {
              params: { id }
            }
          } = this.props;
      
        const url = `/api/v1/employees/index`;
        fetch(url)
        .then(response => {
            if (response.ok) {
            return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ employeesData: response }))
        .catch(() => this.props.history.push("/"));
    }

    render() {
        const {employee, columnDefs, employeesData} = this.state;

        return (
            <MenuLayout>
                <div className="ag-theme-material"  style={ {height: '800px', width: '1200px'} }>
                    <AgGridReact
                        columnDefs={columnDefs}
                        rowData={employeesData}
                        frameworkComponents={this.state.frameworkComponents}
                    >
                    </AgGridReact>
                </div>
            </MenuLayout>
        )
    }
}

export default EmployeeTable;