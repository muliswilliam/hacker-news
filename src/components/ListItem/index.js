import React from 'react';

import {Item, Title, Host, ExternalLink, Description, CommentLink} from './styles';
import { getHostname } from '../../utils/hostname';
import {ARTICLE_LINK, USER_LINK} from '../../utils/article-links';
import {formatTimestamp} from '../../utils/time-ago';

const LINK_REL = 'noopener noreferer nofollow';

const ListItem = ({ id, title, by, url, kids, score, time }) => {
	return (
		<Item>
			<ExternalLink href={url} rel={LINK_REL} target="_blank">
				<Title>
					{title}
					<Host>({getHostname(url)})</Host>
				</Title>
			</ExternalLink>
			<Description>
				{score} points by{' '}
				<CommentLink href={USER_LINK + by} rel={LINK_REL} target="_blank">
					{by} {' '}
				</CommentLink>
				{ formatTimestamp(time * 1000)}
				{' | '}
				<CommentLink href={ARTICLE_LINK + id} rel={LINK_REL} target="_blank">
					{kids ? kids.length: 0} comments
				</CommentLink>
			</Description>
		</Item>
	);
};

export default ListItem;
