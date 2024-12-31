import { http } from '@/utils/request';

export const fileApi = {
	getToken: (fileId) => {
	  return http.get('/files/token', 
		  {
			  fileIdList : [fileId]
		  }
	  );
	},

}