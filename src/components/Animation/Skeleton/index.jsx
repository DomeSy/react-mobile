import React from 'react';

import './index.less';

/**
 * @module 骨架屏
 */
function Index() {
  return (
    <div className="Skeleton">
      <div className="Skeleton-Info">
        <div className="Skeleton-animation"></div>
        <div>
          <p className="Skeleton-animation"></p>
          <p className="Skeleton-animation"></p>
        </div>
      </div>
      <p className="Skeleton-animation"></p>
      <p className="Skeleton-animation"></p>
      <p className="Skeleton-animation Skeleton-right1"></p>
      <p className="Skeleton-animation Skeleton-right2"></p>
      <p className="Skeleton-animation Skeleton-right3"></p>
      <p className="Skeleton-animation Skeleton-right4"></p>
      <p></p>
      <p></p>
      <p className="Skeleton-animation"></p>
      <p className="Skeleton-animation"></p>
      <p className="Skeleton-animation"></p>
      <p></p>
      <p className="Skeleton-animation"></p>
      <p className="Skeleton-animation"></p>
      <p className="Skeleton-animation Skeleton-right1"></p>
      <p className="Skeleton-animation Skeleton-right1"></p>
      <p className="Skeleton-animation Skeleton-right2"></p>
      <p className="Skeleton-animation Skeleton-right2"></p>
    </div>
  )
}

export default Index
