import { http } from '@/utils/request';

export const folderApi = {
	folder: (data) => {
	  return http.post('/folder', data);
	},
}