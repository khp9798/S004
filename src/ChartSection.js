import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ChartSection({ selectedDevice }) {
  const labels = ['10:00', '11:00', '12:00', '13:00', '14:00'];
  const data = {
    labels,
    datasets: [
      {
        label: '온도(°C)',
        data: [3.5, 4.2, 5.1, 4.7, 4.0],
        borderColor: '#ff4d4f',
        backgroundColor: '#ff4d4f22',
        tension: 0.2
      },
      {
        label: '진동',
        data: [1.2, 1.3, 1.5, 1.8, 1.6],
        borderColor: '#ffa500',
        backgroundColor: '#ffa50022',
        tension: 0.2
      },
      {
        label: '전력(W)',
        data: [120, 125, 140, 135, 130],
        borderColor: '#3399ff',
        backgroundColor: '#3399ff22',
        tension: 0.2
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: `${selectedDevice} 센서 시계열 데이터`
      }
    },
    scales: {
      y: { suggestedMin: 0, suggestedMax: 150 }
    }
  };

  return <Line data={data} options={options} />;
}

export default ChartSection;
