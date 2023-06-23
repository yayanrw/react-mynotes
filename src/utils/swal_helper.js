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
  Swal.fire({
    icon: "success",
    title: type,
    text: suggestionText,
    showConfirmButton: false,
    timer: 1000, // Adjust the timer as needed
  });
};

const swalError = (type, message) => {
  Swal.fire({
    icon: "error",
    title: type,
    text: message,
    showConfirmButton: false,
    timer: 1000, // Adjust the timer as needed
  });
};

const swalWarning = (type, message) => {
  Swal.fire({
    icon: "warning",
    title: type,
    text: message,
    showConfirmButton: false,
    timer: 1000, // Adjust the timer as needed
  });
};

export { confirmationDialog, swalSuccess, swalWarning, swalError };
