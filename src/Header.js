import React from 'react';

function Header() {
  return (
    <div style={styles.header}>
      <div style={styles.left}>
        <h4 style={{ margin: 0 }}>고객지원 대시보드</h4>
      </div>
      <div style={styles.right}>
        <span style={{ marginRight: '20px' }}>홍길동 상담사</span>
        <span>192.168.0.1</span>
      </div>
    </div>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '10px 20px',
    borderBottom: '1px solid #ddd'
  },
  left: {
    fontSize: '18px',
    fontWeight: 'bold'
  },
  right: {
    fontSize: '14px',
    color: '#555'
  }
};

export default Header;
