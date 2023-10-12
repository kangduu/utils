function formatFileSize(bytes) {
	if (bytes === 0) return '0 Bytes';

	const k = 1024;
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

	const i = Math.floor(Math.log(bytes) / Math.log(k)); // Math.log 自然对数是以常数e为底数的对数

	return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// 用法示例
const fileSizeInBytes = 123456789; // 替换为你要转换的文件大小（字节数）
const formattedSize = formatFileSize(fileSizeInBytes);
console.log(formattedSize); // 输出类似 "117.74 MB" 的格式化文件大小
