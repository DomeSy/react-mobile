import React from 'react';

import './index.less'

interface TitleProps {
  h1?: boolean;
  content?: string
}

const Title:React.FC<TitleProps> = ({ h1, content, children}) => {
  return (
    <div className='CommonTitle'>
      {
        h1 ? <h1>{children}</h1> :
        <div className='CommonTitle-title'>
          <p></p>
          <p>{children}</p>
        </div>
      }
      {
        content && <div className='CommonTitle-content'> {content}</div>
      }
    </div>
  );
}

export default Title;
