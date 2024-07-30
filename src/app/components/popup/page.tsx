

import React, { ReactNode } from 'react';
import Image from 'next/image';

interface PopupProps {
  trigger: boolean;
  setTrigger: (value: boolean) => void;
  children: ReactNode;
}

function Popup({ trigger, setTrigger, children }: PopupProps) {
  return trigger ? (
    <div className='popup'>
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setTrigger(false)}>
			<Image src="/img/close_window.png" width={20} height={20} alt="close" />
		</button>
        {children}
      </div>
    </div>
  ) : null;
}

export default Popup