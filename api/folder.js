import { http } from '@/utils/request';

export const folderApi = {
	folder: (data) => {
	  return http.post('/folder', data);
	},
	
	getFolder: (parentId) => {
		return http.get('/folder', {
			parentId : parentId
		})
	}
}