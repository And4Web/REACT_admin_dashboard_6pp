import {Chart, Tooltip, Legend, CategoryScale, LinearScale, Title, BarElement, ChartData, ChartOptions} from 'chart.js';

import {Bar} from 'react-chartjs-2';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const months = ["January", 'February', 'March', "April", "May", "June", "July", "August", "September", "October", "November", "December"];

interface BarChartProps {
  horizontal?: boolean;
  data_1: number[];
  data_2: number[];
  title_1: string;
  title_2: string;
  bgColor_1: string;
  bgColor_2: string;
  labels?: string[];
}

function BarChart({horizontal=false, data_1, data_2, title_1, title_2, bgColor_1, bgColor_2, labels=months}: BarChartProps) {

  const options:ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: horizontal? "y" : "x",
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
      title: {
        display: true,
        text: `${title_1} vs ${title_2} each month last year`,
      }
    },
    scales:{
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        }
      },
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        }
      }
    }
  }

  const data:ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: title_1, 
        data: data_1,
        backgroundColor: bgColor_1,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
      {
        label: title_2, 
        data: data_2,
        backgroundColor: bgColor_2,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
    ]
  }

  return (
    <div>
      <Bar options={options} data={data}/>
    </div>
  )
}

export default BarChart;