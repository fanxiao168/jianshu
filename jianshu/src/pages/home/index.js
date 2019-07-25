import React , { Component } from 'react';
import List from './components/List';
import { connect } from 'react-redux';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import axios from 'axios';

import { 
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style';


class Home extends Component {

	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4681/399c05119c11ec982afaf3cb352ad313ed75cfeb.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
					<Topic />
					<List />
				</HomeLeft>
				
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
			</HomeWrapper>
		)
	}

	componentDidMount() {
		axios.get('api/home.json').then((res) => {
			const result = res.data.data;
			const action = {
				type: 'change_home_data',
				topicList: result.topicList,
				articleList: result.articleList,
				recommendList: result.recommendList
			}
			this.props.changeHomeData(action);

		}).catch((e) => {
			console.log(e);
		})
	}
}

const mapDispatch = (dispacth) => ({
	changeHomeData(action) {
		dispacth(action);
	}
})

export default connect(null,mapDispatch)(Home);


