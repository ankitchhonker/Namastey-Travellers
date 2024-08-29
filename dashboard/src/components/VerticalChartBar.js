import React from "react";
import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    plugins,
} from 'chart.js';
import {Bar} from "react-chartjs-2";
 

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

 
export const options = {
    responsive:true,
    plugins:{
        legend:{
            position:"top",
        },
        Title:{
            display: true,
            text:"Holdings"
        },
    },
};

 export function VerticalGraph({data}) {
    return <Bar options={options} data={data}/>
}