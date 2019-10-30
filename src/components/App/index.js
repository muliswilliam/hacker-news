import {connect} from 'react-redux';
import actions from 'store/story/actions';
import App from './App';
import { hasMoreStoriesSelector } from '../../store/story/selectors';

const mapStateToProps = state => ({
	stories: state.story.stories,
	page: state.story.page,
	storyIds: state.story.storyIds,
	isFetching: state.story.isFetching,
	theme: state.app.theme,
	hasMoreStories: hasMoreStoriesSelector(state)
});

const mapDispatcher = dispatch => ({
	fetchStoriesFirstPage: () => dispatch(actions.fetchStoryIds()),
	fetchStories: ({ storyIds, page}) => dispatch(actions.fetchStories({ storyIds, page})),
});

export default connect(mapStateToProps, mapDispatcher)(App);
