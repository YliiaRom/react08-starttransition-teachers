export default {
  productsList: "https://fakestoreapi.in/api/products?limit=10",
  category: "https://fakestoreapi.in/api/products/category",
  getByCategoryAndType: (title) =>
    `https://fakestoreapi.in/api/products/category?type=${title}`,
  // addProduct: "http://localhost:5000/api/products",
  // getUpdateProductLink: (id) => `http://localhost:5000/api/products/${id}`,
  // getProductById: (id) => `http://localhost:5000/api/products/${id}`,
  // getDeleteProductLink: (id) => `http://localhost:5000/api/products/${id}`,
};
// {
//   "status": "SUCCESS",
//   "message": "We have 6 categories to choose from.",
//   "categories": [
//     "tv",
//     "audio",
//     "laptop",
//     "mobile",
//     "gaming",
//     "appliances"
//   ]
// }
// https://fakestoreapi.in/api/products/category?type=mobile"
