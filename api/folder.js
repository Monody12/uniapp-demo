import {
	http
} from '@/utils/request';

export const folderApi = {
	getFolder: (parentId) => {
		return http.get('/folder', {
			parentId: parentId
		})
	},

	deleteFileAndFolder: (fileIdList, folderIdList) => {
		return http.delete('/folder', {
			folderIdList : folderIdList,
			fileIdList: fileIdList
		})
	},

	createFolder: (parentId, folderName) => {
		return http.post('/folder', {
			name: folderName,
			parentId: parentId,
		})
	}

}