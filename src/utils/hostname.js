export const getHostname = (url) => {
	try {
		return new URL(url).hostname;
	} catch (e) {
		return '';
	}
};
