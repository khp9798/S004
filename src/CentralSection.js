import React from 'react';
import TempChart from './TempChart';
import PowerChart from './PowerChart';
import EventLog from './EventLog';

function CentralSection({ selectedDevice }) {
  return (
    <div style={styles.card}>
      {/* 문제 상황 */}
      <div style={styles.section}>
        <h2>문제 상황</h2>
        <p>
          {selectedDevice}에서 사용 중 이상 징후가 감지되었습니다.
          문이 자주 열리며 온도가 일시적으로 상승하는 현상이 보고되었습니다.
        </p>
      </div>

      {/* 문제 원인 */}
      <div style={styles.section}>
        <h2>문제 원인</h2>
        <p style={{ marginBottom: '10px' }}>
          센서 분석 결과, {selectedDevice}의 온도가 정상 범위를 초과하고,
          전력 사용량이 순간적으로 급증한 이력이 있습니다.
          아래 차트와 로그를 참고해 주세요.
        </p>

        {/* 차트 2개를 가로로 배치 */}
        <div style={styles.chartRow}>
          <div style={styles.chartContainer}>
            <TempChart selectedDevice={selectedDevice} />
          </div>
          <div style={styles.chartContainer}>
            <PowerChart selectedDevice={selectedDevice} />
          </div>
        </div>

        {/* 차트 아래에 로그 표시 */}
        <div style={styles.logArea}>
          <EventLog selectedDevice={selectedDevice} hideTitle />
        </div>
      </div>

      {/* 해결책 - 가독성 높은 레이아웃 */}
      <div style={styles.section}>
        <h2>해결책</h2>
        <div style={styles.solutionList}>
          <div style={styles.solutionItem}>
            <strong style={styles.solutionTitle}>1. 냉장고 문 상태 점검</strong>
            <p style={styles.solutionDesc}>
              문이 완전히 닫혔는지 확인하고, 고무 패킹이 손상되지 않았는지 살펴보세요.
              문이 제대로 닫혀 있어야 온도 상승과 전력 낭비를 막을 수 있습니다.
            </p>
          </div>
          <div style={styles.solutionItem}>
            <strong style={styles.solutionTitle}>2. 온도/전력 모니터링</strong>
            <p style={styles.solutionDesc}>
              일시적 상승일 수 있으므로 30분~1시간 정도 센서 수치가 정상 범위(온도 3~5°C, 전력 100~130W 내외)로
              돌아오는지 확인해 주세요. 만약 계속 높다면 추가 점검이 필요합니다.
            </p>
          </div>
          <div style={styles.solutionItem}>
            <strong style={styles.solutionTitle}>3. 진동 수치 확인</strong>
            <p style={styles.solutionDesc}>
              진동이 1.5 이상으로 지속된다면, 냉장고가 수평으로 설치되어 있는지 점검하세요.
              수평이 맞지 않으면 진동이 커지고 소음과 부품 손상 가능성이 있습니다.
            </p>
          </div>
          <div style={styles.solutionItem}>
            <strong style={styles.solutionTitle}>4. 장기간 이상 지속 시 A/S 접수</strong>
            <p style={styles.solutionDesc}>
              문 닫힘 상태와 센서 수치를 모두 조정했음에도 온도와 전력이 정상 범위를 벗어난다면,
              전문 기사에게 점검을 받는 것이 좋습니다. 부품 교체나 센서 보수가 필요할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  section: {
    paddingBottom: '10px',
    borderBottom: '1px solid #ddd'
  },
  chartRow: {
    display: 'flex',
    gap: '20px',
    marginTop: '10px'
  },
  chartContainer: {
    flex: 1,
    height: '200px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px'
  },
  logArea: {
    marginTop: '20px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px'
  },
  // 해결책 섹션 스타일
  solutionList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '10px'
  },
  solutionItem: {
    backgroundColor: '#fafafa',
    border: '1px solid #eee',
    borderRadius: '4px',
    padding: '10px'
  },
  solutionTitle: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '15px'
  },
  solutionDesc: {
    margin: 0,
    lineHeight: 1.6,
    fontSize: '14px'
  }
};

export default CentralSection;
