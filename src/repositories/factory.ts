import cart from '@/modules/Cart/repositories';
import auth from '@/modules/Auth/repositories';
import user from '@/modules/User/repositories';
import product from '@/modules/Product/repositories';
const repositories = new Map(
  Object.entries({
    cart,
    auth,
    user,
    product
  })
);

export default {
  get(repositoryName) {
    if (repositories.has(repositoryName))
      return repositories.get(repositoryName);
    throw new Error("invalid repository name!");
  },
};
