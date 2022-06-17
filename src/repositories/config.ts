export const Config = Object.freeze({
  // baseURL: 'https://polotik.com/api',
  baseURL: `${process.env.BASE_URL}/api`,
  version: "/v1",
});
export const ConfigMock = Object.freeze({
  baseURL: `/`,
});
