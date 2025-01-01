export const HOST_URL = 'https://www.dluserver.cn:8080'
export const BASE_URL = HOST_URL + '/api'
export const FILE_URL = BASE_URL + '/files/download'

export const IMAGE_URLS = {
		menuImg: 'https://www.dluserver.cn:8080/api/files/download?fileId=643&preview=true',
		listIcon: 'https://www.dluserver.cn:8080/api/files/download?fileId=648&preview=true',
		gridIcon: 'https://www.dluserver.cn:8080/api/files/download?fileId=647&preview=true',
		folderIcon: 'https://www.dluserver.cn:8080/api/files/download?fileId=649&preview=true',
		fileIcon: 'https://www.dluserver.cn:8080/api/files/download?fileId=650&preview=true',
		moreIcon: 'https://www.dluserver.cn:8080/api/files/download?fileId=651&preview=true'
	}

// MIME 类型映射对象
export const
	MIME_TYPES = {
		media: {
			mp4: "video/mp4",
			webm: "video/webm",
			ogg: "video/ogg",
			mpeg: "video/mpeg",
			avi: "video/x-msvideo",
			mp3: "audio/mpeg",
			wav: "audio/wav",
			aac: "audio/aac",
			flac: "audio/flac"
		},
		image: {
			bmp: "image/bmp",
			gif: "image/gif",
			ico: "image/x-icon",
			jpg: "image/jpeg",
			png: "image/png",
			webp: "image/webp",
			svg: "image/svg+xml",
			tiff: "image/tiff"
		},
		document: {
			// 原有的文档类型
			pdf: "application/pdf",
			txt: "text/plain",
			html: "text/html",
			css: "text/css",
			js: "application/javascript",
			xml: "application/xml",
			json: "application/json",
			csv: "text/csv",
			md: "text/markdown",

			// 补充的编程语言和配置文件类型
			c: "text/x-c",
			cpp: "text/x-c++",
			java: "text/x-java",
			py: "text/x-python",
			rb: "text/x-ruby",
			php: "text/x-php",
			swift: "text/x-swift",
			go: "text/x-go",
			rs: "text/x-rust",
			ts: "text/x-typescript",

			// 配置和标记文件
			yaml: "application/x-yaml",
			yml: "application/x-yaml",
			toml: "application/x-toml",
			ini: "text/x-ini",
			conf: "text/x-config",
			properties: "text/x-properties",

			// Shell 脚本
			sh: "text/x-shellscript",
			bash: "text/x-shellscript",

			// 数据库相关
			sql: "text/x-sql",

			// 其他文档格式

		}
	}

/**
 * 根据 MIME 类型返回文件类别
 * @param {string} mimetype - MIME 类型字符串，例如 "text/plain"
 * @returns {string} 返回 "Image"、"Media"、"Document" 或 "Unknown"
 */
export function getFileType(mimetype) {
	// 创建反向映射用于查找
	const mimeToType = {};

	// 遍历 MIME_TYPES 对象构建反向映射
	Object.entries(MIME_TYPES).forEach(([fileType, mimeDict]) => {
		Object.values(mimeDict).forEach(mime => {
			mimeToType[mime] = fileType.charAt(0).toUpperCase() + fileType.slice(1);
		});
	});

	return mimeToType[mimetype] || "Unknown";
}