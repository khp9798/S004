import React from 'react';

function SensorDataTable({ selectedDevice }) {
  // 예시 더미 데이터
  const currentData = {
    temperature: 4.5,
    power: 128,
    vibration: 1.6,
    doorOpen: false
  };

  return (
    <div style={styles.container}>
      <h4>현재 센서 데이터</h4>
      <table style={styles.table}>
        <tbody>
          <tr>
            <th>온도(°C)</th>
            <td>{currentData.temperature}</td>
          </tr>
          <tr>
            <th>전력(W)</th>
            <td>{currentData.power}</td>
          </tr>
          <tr>
            <th>진동</th>
            <td>{currentData.vibration}</td>
          </tr>
          <tr>
            <th>문 열림 여부</th>
            <td>{currentData.doorOpen ? '열림' : '닫힘'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#fff',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  }
};

export default SensorDataTable;
