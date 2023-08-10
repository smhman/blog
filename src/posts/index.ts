import {Hello} from './2023/hello/hello';
import {Growtopia} from './2023/growtopia/growtopia';

export const posts = [
	new Hello(),
	new Growtopia(),
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
