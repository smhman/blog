import { posts } from '../../posts';
import { api } from '../../server/api';

export default api({
	GET: async () => posts.filter((post: any) => !post.hidden), // Fixing eslint warning
});
