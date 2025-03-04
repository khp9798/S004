import React from 'react';
import CentralSection from './CentralSection';

function MainContent({ selectedDevice }) {
  return (
    <div style={styles.container}>
      <CentralSection selectedDevice={selectedDevice} />
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: '20px'
  }
};

export default MainContent;
