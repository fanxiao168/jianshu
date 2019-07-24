import { fromJS } from 'immutable';

const defaultState = fromJS({
	topicList: [{
		id: 1,
		title: '社会热点',
		imgUrl: 'https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
	},
	{
		id: 2,
		title: '流量测试',
		imgUrl: 'https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
	}]
});

export default (state = defaultState , action ) => {
	switch(action.type) {
		default:
			return state;
	}
}
