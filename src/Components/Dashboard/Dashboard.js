import React from 'react';
import { Area, AreaChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import Data from './data.json'

const Dashboard = () => {
    return (
        <div className='flex justify-center flex-col' style={{"height": "80vh"}}>
            <h1 className='text-center text-3xl'>DashBoard</h1>
            <div className='flex justify-center items-center mt-10'>
            <div className='mx-10'>
            <h1 className='text-center mb-5'>Month Wise sell</h1>
            <LineChart width={500} height={300} data={Data}>
                <XAxis dataKey="month"/>
                <YAxis dataKey="sell"/>
                <Tooltip/>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }}/>
            </LineChart>
            </div>
            <div className='mx-10'>
                <h1 className='text-center'>Investment vs Revenue</h1>
                <AreaChart
                    width={500}
                    height={300}
                    data={Data}
                >
                    <XAxis dataKey="month"/>
                    <YAxis dataKey="investment"/>
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </div>
            </div>
        </div>
    );
};

export default Dashboard;