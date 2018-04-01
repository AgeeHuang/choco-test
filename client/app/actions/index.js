import axios from 'axios';

export const SEARCH_DRAMA_NAME = 'SEARCH_DRAMA_NAME';

// 以關鍵字向server取得戲劇清單
export const searchDramaName = (name = '') => ({
  type: SEARCH_DRAMA_NAME,
  payload: axios.get(`/api/list?name=${name}`),
});
