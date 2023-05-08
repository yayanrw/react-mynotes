import Swal from "sweetalert2";

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

export { showFormattedDate, confirmationDialog, swalSuccess };
