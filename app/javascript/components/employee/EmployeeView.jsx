import React from "react";
import { Row, Col } from 'antd';
import { NavLink } from "react-router-dom";
import MenuLayout from "../layout/MenuLayout";

function EmployeeDetails({employee}) {
    const {
        full_name, 
        report, 
        location, 
        total_yearly_compensation,
        base_salary,
        stock_grant,
        bonus,
        years_of_experience,
        years_at_company,
        gender,
    } = employee;

    return (
        <>
            <Row gutter={[16, 30]}>
                <h3>Compensation Details:</h3>
            </Row>
            <Row gutter={[16, 30]}>
                <Col span={6}><b>Total Yearly Compensation</b></Col>
                <Col span={6}>{total_yearly_compensation}</Col>
            </Row>
            <Row gutter={[16, 30]}>
                <Col span={6}><b>Base Salary</b></Col>
                <Col span={6}>{base_salary}</Col>
            </Row>
            <Row gutter={[16, 30]}>
                <Col span={6}><b>Stock Grant</b></Col>
                <Col span={6}>{stock_grant}</Col>
            </Row>
            <Row gutter={[16, 30]}>
                <Col span={6}><b>Bonus</b></Col>
                <Col span={6}>{bonus}</Col>
            </Row>
        </>
    );
}

class EmployeeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {}
        };
    }

    fetchData(props) {
        const {
            match: {
              params: { id }
            }
          } = props;
      
        const url = `/api/v1/employees/show/${id}`;
        fetch(url)
        .then(response => {
            if (response.ok) {
            return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ employee: response }))
        .catch(() => this.props.history.push("/employees"));
    }

    componentDidMount() {
        this.fetchData(this.props);
    }
    
    componentDidUpdate(newProps) {
        this.fetchData(newProps);
    }

    render() {
        const {employee} = this.state;
        return (
            <div className="vw-100 vh-100 primary-color">
                <MenuLayout >
                    <Row gutter={[100, 30]}>
                        <Col span={12}>
                            <Row gutter={[16, 30]}>
                                <Col span={24}><h2>{employee.full_name}</h2></Col>
                            </Row>
                            <Row gutter={[16, 60]}>
                                <img src="https://i.stack.imgur.com/l60Hf.png" style={{width: "400px"}}/>
                            </Row>
                            <Row gutter={[16, 30]}>
                                <Col span={12}><b>Report</b></Col>
                                <Col span={12}>
                                    {
                                        employee.report ? (
                                            <NavLink to={`/employee/${employee.report.id}`}>{employee.report.full_name}</NavLink>
                                        ) : "No manager"
                                    }
                                </Col>
                            </Row>
                            <Row gutter={[16, 30]}>
                                <Col span={12}><b>Location</b></Col>
                                <Col span={12}>{employee.location}</Col>
                            </Row>
                            <Row gutter={[16, 30]}>
                                <Col span={12}><b>Years of Experience</b></Col>
                                <Col span={12}>{employee.years_of_experience}</Col>
                            </Row>
                            <Row gutter={[16, 30]}>
                                <Col span={12}><b>Years at Company</b></Col>
                                <Col span={12}>{employee.years_at_company}</Col>
                            </Row>
                            <Row gutter={[16, 30]}>
                                <Col span={12}><b>Gender</b></Col>
                                <Col span={12}>{employee.gender}</Col>
                            </Row>
                        </Col>
                        <Col span={12}><EmployeeDetails employee={employee}/></Col>
                    </Row>
                </MenuLayout>
            </div>
        )
    }
}

export default EmployeeView;