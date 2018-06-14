export default {
  categoryUrl: id => `/categories/${id}`,
  getCategoryId: path => path.split('/').slice(-1)[0],
};
