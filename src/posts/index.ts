import {WTFESM} from './2023/hello-world/hello-world';

export const posts = [
	new WTFESM(),
] as const;

export function sortPosts(p: typeof posts) {
	return [...p].sort((a, b) => {
		if (a.date > b.date) {
			return -1;
		}

		if (a.date < b.date) {
			return 1;
		}

		return 0;
	});
}
