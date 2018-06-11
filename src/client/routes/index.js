export default {
  categoryUrl: id => `/categories/${id}`,
  getCategory: path => path.split('/').slice(-1)[0],
};
