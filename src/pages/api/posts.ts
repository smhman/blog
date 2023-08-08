import {posts} from '../../posts';
import {api} from '../../server/api';

export default api({
	GET: async () => ({
	  data: posts.filter((post: any) => !post.hidden),
	}),
  });