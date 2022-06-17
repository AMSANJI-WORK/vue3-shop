import Vue from "vue";
import router from "@/router";
function responseErrorHandler(error) {
  const {
    status,
    data: { message },
  } = error.response;
  if (!status) return Vue.swal();
  switch (status) {
    case 401:
      Vue.$toast.open({
        message: "احراز هویت با خطا مواجه شد",
        type: "error",
      });
      break;
    case 403:
      router.push("/403");
      Vue.$toast.open({
        message: "این سرویس از سطح دسترسی شما خارج است",
        type: "error",
      });
      break;
    case 404:
      Vue.$toast.open({
        message: "داده ارسالی یافت نشد",
        type: "error",
      });
    case 409:
      Vue.$toast.open({
        message: "بارگذاری فایل با خطا مواجه شد",
        type: "error",
      });
      break;
    case 500:
      Vue.$toast.open({
        message: "این امکان برای شما در دسترس نیست",
        type: "error",
      });
      break;
    default:
      Vue.$toast.open({
        message: "پیام خطا دریافت شد",
        type: "error",
      });
      break;
  }
  return Promise.reject(data);
}
export default responseErrorHandler;
