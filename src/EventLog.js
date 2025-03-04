import React from 'react';

function EventLog({ selectedDevice }) {
  const logs = [
    { time: '2025-03-04 10:00', message: `${selectedDevice} 문 열림`, type: 'info' },
    { time: '2025-03-04 10:05', message: `${selectedDevice} 온도 상승 (4°C → 6°C)`, type: 'warning' },
    { time: '2025-03-04 10:07', message: `${selectedDevice} 진동 수치 상승 (1.3 → 1.8)`, type: 'warning' },
    { time: '2025-03-04 10:10', message: `${selectedDevice} 문 닫힘`, type: 'info' },
    { time: '2025-03-04 10:15', message: `${selectedDevice} 온도 정상화 (6°C → 4.5°C)`, type: 'info' }
  ];

  return (
    <div>
      <h3>{selectedDevice} 이벤트 로그</h3>
      <div style={styles.logContainer}>
        {logs.map((log, idx) => (
          <div key={idx} style={styles.logItem}>
            <div style={styles.logTime}>{log.time}</div>
            <div style={styles.logMessage}>
              {log.type === 'warning' && <span style={styles.warningTag}>[주의]</span>}
              {log.type === 'error' && <span style={styles.errorTag}>[오류]</span>}
              {log.type === 'info' && <span style={styles.infoTag}>[정보]</span>}
              &nbsp;{log.message}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  logContainer: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  logItem: {
    padding: '10px',
    backgroundColor: '#f8f8f8',
    borderRadius: '4px'
  },
  logTime: {
    fontSize: '12px',
    color: '#888',
    marginBottom: '4px'
  },
  logMessage: {
    fontSize: '14px'
  },
  warningTag: {
    color: '#ffa500',
    fontWeight: 'bold'
  },
  errorTag: {
    color: '#ff4d4f',
    fontWeight: 'bold'
  },
  infoTag: {
    color: '#3399ff',
    fontWeight: 'bold'
  }
};

export default EventLog;
