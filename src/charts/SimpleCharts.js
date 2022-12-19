import React, {Component, PureComponent} from 'react';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend} from 'recharts';

const data = [
    {name: 'Monday', uv: 220, pv: 100, amt: 140},
    {name: 'Tuesday', uv: 300, pv: 220, amt: 320},
    {name: 'Wednesday', uv: 275, pv: 500, amt: 350},
    {name: 'Thursday', uv: 250, pv: 250, amt: 180},
    {name: 'Friday', uv: 320, pv: 150, amt: 430},
    {name: 'Saturday', uv: 180, pv: 240, amt: 320},
    {name: 'Sunday', uv: 185, pv: 460, amt: 310},
];


export default class SimpleCharts extends PureComponent {
    render() {
        return (
            <div>
                <p className="text-center"><b>Simple Chart</b></p>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={600} height={300} data={data}
                               margin={{top: 5, right: 20, bottom: 5, left: 0}}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d"/>
                    </LineChart>
                </ResponsiveContainer>
            </div>

        )
    }
}

// export default SimpleCharts;