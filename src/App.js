import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function App() {
  const [selectedDevice, setSelectedDevice] = useState('냉장고'); // 기본 선택: 냉장고

  const handleDeviceSelect = (device) => {
    setSelectedDevice(device);
    // 여기서 데이터 분석 및 LLM 추론 로직을 트리거할 수 있습니다.
    console.log(`Device selected: ${device}. Triggering analysis/inference...`);
  };

  return (
    <div style={styles.appContainer}>
      <Sidebar onDeviceSelect={handleDeviceSelect} />
      <div style={styles.rightSection}>
        <Header />
        <MainContent selectedDevice={selectedDevice} />
      </div>
    </div>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
    backgroundColor: '#f9f9f9'
  },
  rightSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export default App;
