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

function TempChart({ selectedDevice }) {
  const labels = ['10:00', '11:00', '12:00', '13:00', '14:00'];

  // 현재 기기 온도 (예시)
  const currentTempData = [3.5, 4.2, 5.5, 5.8, 4.9];
  // 정상(기준) 온도 (예시)
  const normalTempData = [3.5, 3.7, 4.0, 4.0, 3.8];

  const data = {
    labels,
    datasets: [
      {
        label: '현재 온도(°C)',
        data: currentTempData,
        borderColor: '#ff4d4f',
        backgroundColor: '#ff4d4f22',
        tension: 0.2
      },
      {
        label: '정상 온도(기준)',
        data: normalTempData,
        borderColor: '#52c41a',
        backgroundColor: '#52c41a22',
        tension: 0.2
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // 컨테이너 높이에 맞춤
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: `${selectedDevice} 온도 추이`
      }
    },
    scales: {
      y: {
        suggestedMin: 0,
        suggestedMax: 8
      }
    }
  };

  return <Line data={data} options={options} />;
}

export default TempChart;
