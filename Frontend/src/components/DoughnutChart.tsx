import {Chart, Tooltip, Legend, CategoryScale, LinearScale, Title, ChartData, ChartOptions, ArcElement} from 'chart.js';

import {Doughnut} from 'react-chartjs-2';

Chart.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

interface DoughnutChartProps {
  labels: string[];
  data: number[];  
  title: string;
  backgroundColor: string[];
  cutout?: number | string;
  legends?: boolean;
  offset?: number[];
}

function DoughnutChart({labels, data, backgroundColor, cutout, legends=true, offset}:DoughnutChartProps) {

  const doughnutOptions:ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        display: legends,
        position: "bottom",
        labels: {
          padding: 40,
        }
      }
    },
    cutout
  };

  const doughnutData:ChartData<'doughnut', number[], string> = {
    labels,
    datasets:[
      {
        data, 
        backgroundColor,
        borderWidth: 0,
        offset,
      },
    ]
  }


  return <Doughnut options={doughnutOptions} data={doughnutData}/>
}

export default DoughnutChart