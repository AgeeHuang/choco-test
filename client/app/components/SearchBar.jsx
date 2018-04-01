import React, { Component } from 'react';
import classNames from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import { connect } from 'react-redux';
import { searchDramaName } from '../actions';

// 搜尋視窗, 搜尋名稱中包含其關鍵字的戲劇
@connect((state) => state, { searchDramaName })
export default class SearchBar extends Component {
  state = {
    dramaNm: '',
  }
  handleChange = (el) => {
    // input handle.
    this.setState({ dramaNm: el.target.value });
  }
  keyPress = (el) => {
    // Enter 觸發搜尋功能 (input:focus).
    if (el.keyCode === 13) {
      this.props.searchDramaName(el.target.value)
    }
  }
  render() {
    const { dramaNm } = this.state;
    const { keyword, dramaList, pendingSearch } = this.props;
    return [
      <header key="search" className="search-field">
        <input
          id="keyword"
          type="search"
          value={dramaNm}
          onKeyDown={this.keyPress}
          placeholder="Search drama"
          onChange={this.handleChange}
        />
        <button
          className={classNames({ disabled: pendingSearch })}
          onClick={
            !pendingSearch ?
              () => this.props.searchDramaName(dramaNm) :
              null
          }
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </header>,
      <h2 key="result">
        {
          keyword === '' ?
            '今日熱門' :
            `${keyword} 的搜尋結果 共${dramaList.length}筆`
        }
      </h2>
    ];
  }
}
