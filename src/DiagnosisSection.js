import React from 'react';

function DiagnosisSection({ selectedDevice }) {
  return (
    <div style={styles.card}>
      <h3>문제 진단</h3>
      <div style={styles.content}>
        <p>
          <strong>{selectedDevice} 문제:</strong> {selectedDevice}의 센서 데이터에서 이상 징후가 감지됨.
        </p>
        <p>
          <strong>추정 원인:</strong> 센서 오작동 또는 사용자 부주의 가능성.
        </p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    flex: 1,
    backgroundColor: '#fff',
    border: '2px solid #ff4d4f',
    borderRadius: '8px',
    padding: '20px'
  },
  content: {
    marginTop: '10px',
    lineHeight: 1.5
  }
};

export default DiagnosisSection;
