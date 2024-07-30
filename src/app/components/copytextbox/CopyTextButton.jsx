import React, { useState } from 'react';
import Image from 'next/image';

function CopyTextButton({ textToCopy }) {
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 1000);
    } catch (err) {
      setCopySuccess('Failed to copy');
      setTimeout(() => setCopySuccess(''), 1000);
    }
  };

  return (
    <div style={{position: 'relative', display: 'inline-block'}}>
      {copySuccess && (
        <div style={{
          position: 'absolute',
          top: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#333',
          color: '#fff',
          padding: '2px 5px',
          borderRadius: '3px',
          fontSize: '12px'
        }}>
          {copySuccess}
        </div>
      )}
      <button onClick={copyToClipboard} style={{background: 'none', border: 'none', cursor: 'pointer'}}>
        <Image src="/img/copy.png" width={20} height={20} alt="Copy" />
      </button>
    </div>
  );
}

export default CopyTextButton;