import React, {Component} from 'react';
import { ThemeProvider } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { colorsDark } from 'styles/palette';
import { Wrapper, Title } from 'components/App/styles';
import List from '../List';
import Loader from 'components/Loader'
import GlobalStyle from '../../styles/globals';

class App extends Component {
	componentDidMount() {
		this.props.fetchStoriesFirstPage();
	}

	fetchStories = () => {
		const { storyIds, page, fetchStories, isFetching, theme } = this.props;

		if(!isFetching) {
			fetchStories({ storyIds, page});
		}
	};

	render() {
		const { stories, hasMoreStories } = this.props;

		return (
			<ThemeProvider theme={colorsDark}>
				<GlobalStyle darkTheme/>
				<div>
					<Wrapper>
						<Title>Hackers News Reader</Title>
						<InfiniteScroll
							next={this.fetchStories}
							dataLength={stories.length}
							hasMore={hasMoreStories}
							loader={<Loader />}
							style={{
								height: '100%',
								overflow: 'visible'
							}}
						>
							<List stories={stories}/>
						</InfiniteScroll>
					</Wrapper>
				</div>
			</ThemeProvider>
		);
	}
}

export default App;
