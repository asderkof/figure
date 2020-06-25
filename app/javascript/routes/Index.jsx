import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/home/Home";
import EmployeeView from "../components/employee/EmployeeView";
import EmployeeTable from "../components/employee/EmployeeTable";
import CompanyOverview from "../components/overview/CompanyOverview";
import UploadDataPage from "../components/upload/UploadDataPage";

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/overview" exact component={CompanyOverview} />
            <Route path={["/employees", "/employee"]} exact component={EmployeeTable} />
            <Route path="/employee/:id" component={EmployeeView} />
            <Route path="/upload" exact component={UploadDataPage} />
        </Switch>
    </Router>
);