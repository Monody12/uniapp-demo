import {
	http
} from '@/utils/request';

export const folderApi = {
	getFolder: (parentId) => {
		return http.get('/folder', {
			parentId: parentId
		})
	},

	createFolder: (parentId, folderName) => {
		return http.post('/folder', {
			name: folderName,
			parentId: parentId,
		})
	}

}