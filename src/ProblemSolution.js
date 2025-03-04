import React from 'react';

function ProblemSolution() {
  return (
    <div style={styles.container}>
      <h3>문제 해결 방법</h3>
      <ul>
        <li>냉장고 온도 조정</li>
        <li>냉장고 문 닫힘 상태 확인</li>
        <li>필요 시 A/S 요청</li>
      </ul>
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    marginLeft: '10px',
    padding: '20px',
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '4px'
  }
};

export default ProblemSolution;
