import { ChartOptions } from "chart.js";
import { ReactChart } from "chartjs-react";

const data = {
    datasets: [
        {
            label: 'A dataset',
            data: Array.from({ length: 100 }, () => ({
                x: (Math.random() - 0.5) * 100,
                y: (Math.random() - 0.5) * 100,
            })),
            backgroundColor: 'rgba(255, 99, 132, 1)',
        },
    ],
};

const chartOption : ChartOptions = {
    scales: {
        x: {
            type: 'linear',
        },
        y: {
            type: 'linear',
        },
    },
};

export default function ChartsPage() {


    return (<div>
        <ReactChart type="scatter" height={400} data={data} options={chartOption} />
    </div>);
}