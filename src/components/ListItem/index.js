import React from 'react';

import {Item, Title, Host, ExternalLink, Description, CommentLink} from './styles';

const LINK_REL = 'noopener noreferer nofollow';

const ListItem = () => {
	return (
		<Item>
			<ExternalLink>
				<Title>
					The Developer Community
					<Host>(gitconnect.com)</Host>
				</Title>
			</ExternalLink>
			<Description>
				900 points by{' '}
				<CommentLink href="#" rel={LINK_REL} target="_blank">
					Test User {' '}
				</CommentLink>
				1 hour ago
				{' | '}
				<CommentLink href="#" rel={LINK_REL} target="_blank">
					42 comments
				</CommentLink>
			</Description>
		</Item>
	);
};

export default ListItem;
