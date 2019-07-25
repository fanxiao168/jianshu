import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList
})

const addHomeList = (list, nexPage) => ({
	type: constants.ADD_ARTICLE_LIST,
	list: fromJS(list),
	nexPage
})

export const getHomeInfo = () => {

	return (dispatch) => {

		axios.get('api/home.json').then((res) => {
			const result = res.data.data;
			dispatch(changeHomeData(result));

		}).catch((e) => {
			console.log(e);
		})

	}
}

export const loadMoreList = (page) => {
	return (dispatch) => {
		axios.get('api/homeList.json?page=' + page).then((res) => {
			const result = res.data.data;
			dispatch(addHomeList(result,page + 1));

		}).catch((e) => {
			console.log(e);
		})
	}
}
