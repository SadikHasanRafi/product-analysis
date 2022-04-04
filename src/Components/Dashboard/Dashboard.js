import React from 'react';
import { CartesianGrid, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import Data from './data.json'

const Dashboard = () => {
    return (
        <div className='flex justify-center flex-col h-screen'>
            <h1 className='text-center text-3xl'>DashBoard</h1>
            <div className='flex justify-center items-center'>
            <LineChart width={500} height={300} data={Data}>
                <XAxis dataKey="investment"/>
                <YAxis/>
                <Tooltip/>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                <Line type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }}/>
            </LineChart>
            <PieChart width={600} height={600}>
                <Pie data={Data} dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Tooltip></Tooltip>
                <Pie data={Data} dataKey="sell" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
            </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;