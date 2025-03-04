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

function PowerChart({ selectedDevice }) {
  const labels = ['10:00', '11:00', '12:00', '13:00', '14:00'];

  // 현재 기기 전력 (예시)
  const currentPowerData = [120, 135, 150, 140, 130];
  // 정상(기준) 전력 (예시)
  const normalPowerData = [110, 115, 120, 125, 120];

  const data = {
    labels,
    datasets: [
      {
        label: '현재 전력(W)',
        data: currentPowerData,
        borderColor: '#faad14',
        backgroundColor: '#faad1422',
        tension: 0.2
      },
      {
        label: '정상 전력(기준)',
        data: normalPowerData,
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
        text: `${selectedDevice} 전력 사용 추이`
      }
    },
    scales: {
      y: {
        suggestedMin: 100,
        suggestedMax: 160
      }
    }
  };

  return <Line data={data} options={options} />;
}

export default PowerChart;
