export default {
  pages: {
    home: "/",
    contacts: "/contacts",
    payment: "/payment",
    products: {
      index: "/products",
      api: "/products-api",
      add: "/products/new",
      edit: "/products/:id/edit",
      detail: "/products/:id",
    },
  },
  navigate: {
    products: {
      list: "/products",
      add: "/products/new",
      listApi: "/products-api",
      getDetailLink: (id) => `/products/${id}`,
      getEditLink: (id) => `/products/${id}/edit`,
    },
  },
};
