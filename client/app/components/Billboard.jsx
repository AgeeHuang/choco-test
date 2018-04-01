import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import DramaList from './DramaList';
import { searchDramaName } from '../actions';

// 搜尋視窗/搜尋結果區塊
@connect((state) => state, { searchDramaName })
class Billboard extends React.Component {
  componentDidMount() {
    // 先取得所有戲劇清單
    const { searchDramaName } = this.props;
    searchDramaName();
  }
  render() {
    const { dramaList, keyword } = this.props;
    return (
      <section className="billboard">
        <SearchBar />
        <DramaList
          search={keyword !== ''}
          list={dramaList}
        />
      </section>
    );
  }
}

export default Billboard;
