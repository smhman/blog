import {Hello} from './2023/hello/hello';
import {Alika} from './2023/alika-interview/alika-interview';
import {LifeUpdates} from './2025/lifeupdates/lifeupdates';

export const posts = [
	new Hello(),
	new LifeUpdates(),
	new Alika(),
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
