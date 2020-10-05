import { toast } from "react-toastify";

export function formatProductTitle(title) {
  const brandName = title.split(" ").slice(0, 3).join(" ");
  const productName = title.split(" ").slice(-3).join(" ");

  return { brandName, productName };
}

export function capitalizeWord(word) {
  return word.toUpperCase();
}

export function toastCreator(type, message) {
  return () =>
    toast(message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type,
    });
}
