import React from 'react';
import DiagnosisSection from './DiagnosisSection';
import SolutionSection from './SolutionSection';
import DeviceInfo from './DeviceInfo';
import ChartSection from './ChartSection';
import EventLog from './EventLog';

function MainContent({ selectedDevice }) {
  return (
    <div style={styles.container}>
      {/* 상단: 문제 진단 & 문제 해결 방법 */}
      <div style={styles.problemRow}>
        <DiagnosisSection selectedDevice={selectedDevice} />
        <SolutionSection selectedDevice={selectedDevice} />
      </div>

      {/* 하단: 기기 상태, 차트, 이벤트 로그 */}
      <div style={styles.bottomRow}>
        <div style={styles.leftCol}>
          <DeviceInfo selectedDevice={selectedDevice} />
          <div style={styles.chartContainer}>
            <ChartSection selectedDevice={selectedDevice} />
          </div>
        </div>
        <div style={styles.rightCol}>
          <EventLog selectedDevice={selectedDevice} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  problemRow: {
    display: 'flex',
    gap: '20px'
  },
  bottomRow: {
    display: 'flex',
    gap: '20px',
    flex: 1
  },
  leftCol: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  chartContainer: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px'
  },
  rightCol: {
    flex: 1,
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px'
  }
};

export default MainContent;
