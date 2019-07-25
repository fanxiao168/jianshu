import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link }	from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';

import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	NavSearch,
	Addition,
	Button
} from './style';


class Header extends PureComponent {

	getListArea() {

		const { focused, mouseIn, list , totalPage, page , handleMouseEnter , handleMouseLeave , handleChangePage } = this.props;
		const newList = list.toJS();
		const pageList = [];

		if (newList.length) {

			for (let i = (page - 1) * 10 ; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={ newList[i] }>{ newList[i] }</SearchInfoItem>
				)
			}
		}
		
		if (focused || mouseIn) {
			return (
				<SearchInfo 
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
					  热门搜索
						<SearchInfoSwitch 
						onClick={() => handleChangePage(page,totalPage,this.spinIcon)}
						>
							<span ref={(icon)=> {this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
							换一批
						</SearchInfoSwitch>

					</SearchInfoTitle>
				 	<SearchInfoList>
				 		{ pageList }
				 	</SearchInfoList>
				</SearchInfo>
			)
		}else{
			return null;
		}
	}


	render() {
		const { focused, handleInputFocus, handleInputBlur , list } = this.props;
		return (

			<HeaderWrapper>
					<Link to='/'>
						<Logo/>
					</Link>
					
					<Nav>
						<NavItem className='left active'>首页</NavItem>
						<NavItem className='left'>下载App</NavItem>
						<NavItem className='right'>登陆</NavItem>
						<NavItem className='right'>
						<span className="iconfont">&#xe636;</span>
						</NavItem>

						<SearchWrapper>
							<CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
							>
								<NavSearch
									className={focused ? 'focused':''}
									onFocus={ () => handleInputFocus(list) }
									onBlur={handleInputBlur}
								></NavSearch>
							</CSSTransition>
							<span className={focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe62b;</span>
							{this.getListArea()}
						</SearchWrapper>

					</Nav>

					<Addition>
						<Button className='writting'>
						<span className="iconfont">&#xe608;</span>
						写文章
						</Button>
						<Button className='reg'>注册</Button>
					</Addition>
			</HeaderWrapper>

		)

	}
}


const mapStateToProps = (state) => {
	return {
		focused : state.getIn(['header','focused']),
		list: state.getIn(['header','list']),
		totalPage: state.getIn(['header','totalPage']),
		page: state.getIn(['header','page']),
		mouseIn:state.getIn(['header','mouseIn'])
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus(list) {

			(list.size === 0) && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},

		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},

		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},

		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},

		handleChangePage(page,totalPage,spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else{
				originAngle = 0;
			}
			spin.style.transform = 'rotate('+(originAngle + 360)+'deg)';
		
			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1));
			}else{
				dispatch(actionCreators.changePage(1));
			}
			
		}


	}
}

export default connect(mapStateToProps,mapDispathToProps)(Header);