import React, {Component} from 'react';
import SimpleCharts from "./SimpleCharts";
import ShapePieChart from "./ShapePieChart";
import PieChartCustomizedLabel from "./PieChartCustomizedLabel"
import SimpleBarCharts from "./SimpleBarChart";
import TwoLevelPieChart from "./TwoLevelPieChart";
import "./main.css";
import {Row, Col} from "reactstrap";

class Chart extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md={6}>
                        <SimpleCharts/>
                    </Col>
                    <Col md={6}>
                        <SimpleBarCharts/>
                    </Col>
                </Row>
                <br/>
                <hr/>
                <Row>
                    <Col md={4}>
                        <PieChartCustomizedLabel/>
                    </Col>
                    <Col md={4}>
                        <ShapePieChart/>
                    </Col>
                    <Col md={4}>
                        <TwoLevelPieChart/>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Chart;