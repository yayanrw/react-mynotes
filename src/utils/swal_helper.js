import Swal from "sweetalert2";

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

export { confirmationDialog, swalSuccess, swalWarning, swalError };
