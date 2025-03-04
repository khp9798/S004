import React, { useState } from 'react';

function Accordion({ items }) {
  return (
    <div>
      {items.map((item, idx) => (
        <AccordionItem key={idx} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <div style={styles.item}>
      <div style={styles.titleBar} onClick={toggle}>
        <span>{title}</span>
        <span style={styles.icon}>{open ? '▲' : '▼'}</span>
      </div>
      {open && <div style={styles.content}>{children}</div>}
    </div>
  );
}

const styles = {
  item: {
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '10px'
  },
  titleBar: {
    backgroundColor: '#f8f8f8',
    padding: '10px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between'
  },
  icon: {
    fontWeight: 'bold'
  },
  content: {
    padding: '10px'
  }
};

export default Accordion;
