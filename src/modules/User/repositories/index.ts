import defaultClient from "@/repositories/clients/default";
import { User } from "@/modules/User/store/type";
const source = "/users";
export default {
  getAllUsers() {
    return defaultClient.get(`${source}`);
  },
  getAUser(id: number) {
    return defaultClient.get(`${source}/${id}`);
  },
  createUser(payload: User) {
    return defaultClient.post(`${source}`, payload);
  },
  updateUser(id: number, payload: User) {
    return defaultClient.put(`${source}/${id}`, payload);
  },
  deleteUser(id: number) {
    return defaultClient.delete(`${source}/${id}`);
  },
};
