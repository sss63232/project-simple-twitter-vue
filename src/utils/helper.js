import axios from "axios";
import Swal from "sweetalert2";

const baseURL = "https://twitter-api-2020-s63232.vercel.app/api";

export const apiHelper = axios.create({
  baseURL,
});

//成功用
export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  imageUrl: "https://i.imgur.com/Mip3qeP.jpg",
});
export default Toast;

//失敗用
export const Toast2 = Swal.mixin({
  toast: true,
  position: "top-end",
  timer: 3000,
  showConfirmButton: false,
  imageUrl: "https://i.imgur.com/Bc63ZDR.png",
});
