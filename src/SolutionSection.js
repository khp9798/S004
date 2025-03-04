import React from 'react';

function SolutionSection({ selectedDevice }) {
  return (
    <div style={styles.card}>
      <h3>문제 해결 방법</h3>
      <ul style={styles.list}>
        <li>{selectedDevice}의 문 닫힘 상태 재확인</li>
        <li>{selectedDevice} 센서 이상 시 A/S 접수 안내</li>
        <li>온도 설정값(3~5°C) 확인</li>
        <li>진동 수치(1.0~1.5) 이상일 경우 점검</li>
      </ul>
    </div>
  );
}

const styles = {
  card: {
    flex: 1,
    backgroundColor: '#fff',
    border: '2px solid #3399ff',
    borderRadius: '8px',
    padding: '20px'
  },
  list: {
    marginTop: '10px',
    lineHeight: 1.6
  }
};

export default SolutionSection;
