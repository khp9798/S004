import React from 'react';

function Sidebar({ onDeviceSelect }) {
  const devices = ['냉장고', '세탁기', '에어컨'];

  return (
    <div style={styles.sidebar}>
      <h3 style={styles.title}>고객 정보</h3>
      <div style={styles.section}>
        <h4>기본 정보</h4>
        <p>고객명: 김말랑</p>
        <p>연락처: 010-1234-5678</p>
        <p>생년월일: 1985-05-05</p>
      </div>

      <div style={styles.section}>
        <h4>기기 목록</h4>
        {devices.map((device, idx) => (
          <button
            key={idx}
            style={styles.deviceButton}
            onClick={() => onDeviceSelect(device)}
          >
            {device}
          </button>
        ))}
      </div>

      <div style={styles.section}>
        <h4>상담 이력</h4>
        <div style={styles.historyItem}>
          <div>2023-06-05 / 14:30</div>
          <div>제품 사용법 문의</div>
        </div>
        <div style={styles.historyItem}>
          <div>2023-06-04 / 09:15</div>
          <div>결제 오류 문의</div>
        </div>
      </div>

      <div style={styles.buttonContainer}>
        <button style={styles.btnEnd}>통화 종료</button>
      </div>
    </div>
  );
}

const styles = {
  sidebar: {
    width: '250px',
    backgroundColor: '#fff',
    borderRight: '1px solid #ddd',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px'
  },
  title: {
    margin: '0 0 20px 0'
  },
  section: {
    marginBottom: '20px'
  },
  deviceButton: {
    display: 'block',
    width: '100%',
    marginBottom: '5px',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    backgroundColor: '#eee',
    cursor: 'pointer'
  },
  historyItem: {
    marginBottom: '8px',
    padding: '6px',
    backgroundColor: '#f8f8f8',
    borderRadius: '4px'
  },
  buttonContainer: {
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  btnEnd: {
    padding: '10px',
    backgroundColor: '#ff4d4f',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default Sidebar;
