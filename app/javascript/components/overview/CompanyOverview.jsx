import React from "react";
import MenuLayout from "../layout/MenuLayout";
import { Row, Col, Layout, Menu } from 'antd';
import {buildCompDistributionGraph, updateCompData} from "../../d3/compensationDistributionByTypePie"
import LevelSidebar from "./LevelSidebar"
import 'antd/dist/antd.css';

class CompanyOverview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLevelIndex: 0,
            levelsData: [],
            svgData: null,
        }
    }

    buildGraphData() {
        const {levelsData, selectedLevelIndex} = this.state;
        const selectedLevel = levelsData[selectedLevelIndex];

        return [
            {
                label: "Base Salary",
                value: selectedLevel.employees.map((emp) => emp.base_salary).reduce( (sum, current) => sum + current, 0 ),
            },
            {
                label: "Stock Grant", 
                value: selectedLevel.employees.map((emp) => emp.stock_grant).reduce( (sum, current) => sum + current, 0 ),
            },
            {
                label: "Bonus", 
                value: selectedLevel.employees.map((emp) => emp.bonus).reduce( (sum, current) => sum + current, 0 ),
            }
        ]
    }

    onFetchSuccess(response) {
        this.setState({ 
            levelsData: response,
            svgData: buildCompDistributionGraph(".distGraph"),
        }, () => {            
            updateCompData(this.state.svgData, this.buildGraphData());
        });
    }

    componentDidMount() {
        const url = `/api/v1/level/index`;
        fetch(url)
        .then(response => {
            if (response.ok) {
            return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then(response => this.onFetchSuccess(response))
        .catch(() => this.props.history.push("/"));
    }

    handleSelectLevel = (event) => {
        this.setState({selectedLevelIndex: parseInt(event.key)}, () => {
            updateCompData(this.state.svgData, this.buildGraphData());
        });
    }

    randomData (){
        var labels = color.domain();
        return labels.map(function(label){
            return { label: label, value: Math.random() }
        });
    }

    render() {    
        const {levelsData} = this.state;
        return (
            <MenuLayout sidebar={false}>
                <LevelSidebar levels={levelsData} onSelectLevel={this.handleSelectLevel}>
                
                    <Row gutter={[40, 40]}>
                            <Col span={8}>
                                <div style={{textAlign: "center"}}><h4>Total compensation average allocation</h4></div>
                                <div className="distGraph" style={{width: "100%", height: 500/1.5}}/>
                            </Col>
                            <Col span={16}>
                                <div style={{textAlign: "center"}}><h4>Total compensation distribution</h4></div>
                            </Col>
                    </Row>
                    <Row gutter={[40, 40]}>
                            <Col span={8}>
                                <div style={{textAlign: "center"}}><h4>Total compensation over time</h4></div>
                                <div className="distGraph" style={{width: "100%", height: 500/1.5}}/>
                            </Col>
                            <Col span={8}>
                                <div style={{textAlign: "center"}}><h4>Headcount over time</h4></div>
                                <div className="distGraph" style={{width: "100%", height: 500/1.5}}/>
                            </Col>
                            <Col span={8}>
                                <div style={{textAlign: "center"}}><h4>Pay scale</h4></div>
                                <div className="distGraph" style={{width: "100%", height: 500/1.5}}/>
                            </Col>
                    </Row>
                </LevelSidebar>
            </MenuLayout>
        )
    }
    
};

export default CompanyOverview;