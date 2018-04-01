import React from 'react';
import classNames from 'classnames';
import LazyLoad from 'react-lazyload';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTv from '@fortawesome/fontawesome-free-solid/faTv';

// 單一戲劇區塊元件
const DramaRow = ({ drama, className }) => (
  <div className={classNames('drama-row', className)}>
    <LazyLoad
      debounce={200}
      placeholder={
        <div className="drama-pic" >
          <FontAwesomeIcon icon={faTv} />
        </div>
      }
    >
      <div
        className="drama-pic"
        style={{ backgroundImage: `url(${drama.vertical_poster})`}}
      />
    </LazyLoad>
    <div className={classNames('drama-wrap', className)}>
      <p className="drama-name">
        {drama.name}
      </p>
      <p>
        <span>{drama.year}年</span>
        <span>共{drama.total_eps}集</span>
      </p>
      <p className="drama-views">
        {drama.total_views.toLocaleString()}次觀看
      </p>
    </div>
  </div>
);

export default DramaRow;