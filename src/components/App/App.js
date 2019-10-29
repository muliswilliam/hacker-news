import React, {Component} from 'react';
import { ThemeProvider } from 'styled-components';
import { colorsDark } from 'styles/palette';
import { Wrapper, Title } from 'components/App/styles';
import List from '../List';

class App extends Component {
	componentDidMount() {
		this.props.fetchStoriesFirstPage();
	}

	render() {
		const { stories } = this.props;

		return (
			<ThemeProvider theme={colorsDark}>
				<div>
					<Wrapper>
						<Title>Hackers News Reader</Title>
						<List stories={stories}/>
					</Wrapper>
				</div>
			</ThemeProvider>
		);
	}
}

export default App;
