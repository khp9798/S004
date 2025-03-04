import React from 'react';

function DeviceInfo({ selectedDevice }) {
  return (
    <div style={styles.card}>
      <h3>기기 상태 및 정보 ({selectedDevice})</h3>
      <div style={styles.infoRow}>
        <div>모델명: {selectedDevice} X2000</div>
        <div>설치일: 2022-05-05</div>
      </div>
      <div style={styles.infoRow}>
        <div>현재 온도: <strong>4°C</strong></div>
        <div style={{ color: '#ffa500' }}>정상</div>
      </div>
      <div style={styles.infoRow}>
        <div>전력: <strong>130W</strong></div>
        <div>진동: <strong>1.8</strong> (약간 높음)</div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px'
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px'
  }
};

export default DeviceInfo;
