import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';

function App() {
  const [selectedDevice, setSelectedDevice] = useState('냉장고');

  const handleDeviceSelect = (device) => {
    setSelectedDevice(device);
    console.log(`Device selected: ${device}`);
    // 실제 서비스에서는 여기서 LLM 추론/데이터 분석 로직 등을 트리거
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
    backgroundColor: '#f0f2f5'
  },
  rightSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export default App;
