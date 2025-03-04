import React from 'react';

function EventLog({ selectedDevice, hideTitle }) {
  const allLogs = [
    { time: '2025-03-04 10:00', message: `${selectedDevice} 문 열림`, type: 'info' },
    { time: '2025-03-04 10:05', message: `${selectedDevice} 온도 상승 (4°C → 6°C)`, type: 'warning' },
    { time: '2025-03-04 10:07', message: `${selectedDevice} 진동 수치 상승 (1.3 → 1.8)`, type: 'warning' },
    { time: '2025-03-04 10:10', message: `${selectedDevice} 문 닫힘`, type: 'info' },
    { time: '2025-03-04 10:15', message: `${selectedDevice} 온도 정상화 (6°C → 4.5°C)`, type: 'info' },
    { time: '2025-03-04 10:20', message: `${selectedDevice} 전력 급상승 (120W → 150W)`, type: 'warning' },
    { time: '2025-03-04 10:25', message: `${selectedDevice} 전력 과부하 에러 발생`, type: 'error' }
  ];

  // 주의/오류 로그만 필터
  const filteredLogs = allLogs.filter(log => log.type === 'warning' || log.type === 'error');

  return (
    <div style={styles.container}>
      {!hideTitle && <h3>{selectedDevice} 이벤트 로그</h3>}
      <div style={styles.logList}>
        {filteredLogs.map((log, idx) => (
          <div key={idx} style={styles.logItem}>
            <div style={styles.logTime}>{log.time}</div>
            <div style={styles.logMessage}>
              {log.type === 'warning' && <span style={styles.warningTag}>[주의]</span>}
              {log.type === 'error' && <span style={styles.errorTag}>[오류]</span>}
              &nbsp;{log.message}
            </div>
          </div>
        ))}
        {filteredLogs.length === 0 && (
          <div style={styles.logItem}>
            <div style={styles.logMessage}>주의/오류 로그가 없습니다.</div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#fff'
  },
  logList: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxHeight: '200px',
    overflowY: 'auto'
  },
  logItem: {
    padding: '8px',
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
  }
};

export default EventLog;
