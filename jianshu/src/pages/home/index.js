import React , { Component } from 'react';
import List from './components/List';
import { connect } from 'react-redux';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { actionCreators } from './store';

import { 
	HomeWrapper,
	HomeLeft,
	HomeRight,
	BackTop
} from './style';


class Home extends Component {

	handleScrollTop() {
		window.scrollTo(0,0);
	}

	render() {

		const { showScroll } = this.props;
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
				{showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
			</HomeWrapper>
		)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll',this.props.changeScrollTopShow);
	}

	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
	}

	bindEvents() {
		window.addEventListener('scroll',this.props.changeScrollTopShow);
	}
}

const mapState = (state) => ({
	showScroll: state.getIn(['home','showScroll'])
})

const mapDispatch = (dispacth) => ({
	
	changeHomeData() {
		dispacth(actionCreators.getHomeInfo());
	},

	changeScrollTopShow() {
		console.log(document.documentElement.scrollTop);
		if (document.documentElement.scrollTop > 400) {
			dispacth(actionCreators.toggleTopShow(true));
		}else{
			dispacth(actionCreators.toggleTopShow(false));
		}
	}
})

export default connect(mapState,mapDispatch)(Home);


