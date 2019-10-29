import { actionTypes} from './actions';

const getInitialState = () => ({
	storyIds: [],
	stories: [],
	page: 0,
	isFetching: false,
	error: ''
});

const storyReducer = (state = getInitialState(), { type, payload }) => {
	switch (type) {
		case actionTypes.FETCH_STORY_IDS_REQUEST: {
			return {
				...state,
				isFetching: true
			}
		}
		case actionTypes.FETCH_STORY_IDS_SUCCESS: {
			return {
				...state,
				...payload,
				isFetching: false
			}
		}
		case actionTypes.FETCH_STORY_IDS_FAILURE: {
			return {
				...state,
				isFetching: false
			}
		}

		case actionTypes.FETCH_STORIES_REQUEST: {
			return {
				...state,
				...payload,
				isFetching: true
			}
		}

		case actionTypes.FETCH_STORIES_SUCCESS: {
			return {
				...state,
				stories: [...state.stories, ...payload.stories],
				page: state.page + 1,
				isFetching: false
			}
		}

		default:
			return state
	}
};

export default storyReducer;
