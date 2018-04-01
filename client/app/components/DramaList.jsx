import React from 'react';
import DramaRow from './DramaRow';
import classNames from 'classnames';

// 搜尋結果區塊 產生list component
const DramaList = ({ list, search }) => (
  <div className="drama-container">
    {
      list.map((drama) => (
        <DramaRow
          key={drama.name}
          drama={drama}
          className={classNames({
            spotlight: drama.total_views > 1500 && !search,
            search,
          })}
        />
      ))
    }
  </div>
);

export default DramaList;
