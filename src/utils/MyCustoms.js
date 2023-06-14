import Swal from "sweetalert2";
import { DARK_KEY } from "./MyConstants";

const showFormattedDate = (date, lang) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString(lang, options);
};

const confirmationDialog = (warnText, suggestionText, areYouSure, callBack) => {
  Swal.fire({
    title: areYouSure,
    text: warnText,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: suggestionText,
  }).then((result) => {
    if (result.isConfirmed) {
      callBack(true);
    } else {
      callBack(false);
    }
  });
};

const swalSuccess = (type, suggestionText) => {
  Swal.fire(type, suggestionText, "success");
};

const swalError = (type, message) => {
  Swal.fire(type, message, "error");
};

const swalWarning = (type, message) => {
  Swal.fire(type, message, "warning");
};

const changeThemeMode = (prevTheme, changeTo) => {
  var bgElements = document.getElementsByClassName(`bg-${prevTheme}`);
  var textElements = document.getElementsByClassName(`text-${changeTo}`);

  Array.from(bgElements).forEach(function (element) {
    element.classList.replace(`bg-${prevTheme}`, `bg-${changeTo}`);
    element.style.transition = "background-color 1s";
  });
  Array.from(textElements).forEach(function (element) {
    element.classList.replace(`text-${changeTo}`, `text-${prevTheme}`);
  });

  if (changeTo === DARK_KEY) {
    const bgWElements = document.getElementsByClassName("bg-white");
    Array.from(bgWElements).forEach(function (element) {
      element.classList.replace(`bg-white`, `bg-dark-2`);
    });
  } else {
    const bgWElements = document.getElementsByClassName("bg-dark-2");
    Array.from(bgWElements).forEach(function (element) {
      element.classList.replace(`bg-dark-2`, `bg-white`);
    });
  }
};

export {
  showFormattedDate,
  confirmationDialog,
  swalSuccess,
  swalWarning,
  swalError,
  changeThemeMode,
};
