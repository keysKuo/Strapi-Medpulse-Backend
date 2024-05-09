module.exports = ({ env }) => ({
  upload: {
    sizeLimit: env.int("FILE_UPLOAD_SIZE_LIMIT", 100 * 1024 * 1024), // Giới hạn kích thước file (đơn vị byte), mặc định là 100MB
  },
});
