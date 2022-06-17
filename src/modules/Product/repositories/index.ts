import defaultClient from "@/repositories/clients/default";
import { Product } from "@/modules/Product/store/type";
const source = "/products";
export default {
  getAllProducts() {
    return defaultClient.get(`${source}`);
  },
  getAProduct(id: number) {
    return defaultClient.get(`${source}/${id}`);
  },
  createProduct(payload: Product) {
    return defaultClient.post(`${source}`, payload);
  },
  updateProduct(id: number, payload: Product) {
    return defaultClient.put(`${source}/${id}`, payload);
  },
  deleteProduct(id: number) {
    return defaultClient.delete(`${source}/${id}`);
  },
};
