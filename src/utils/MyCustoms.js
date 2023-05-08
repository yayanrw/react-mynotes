import Swal from "sweetalert2";
import {
  ARCHIVE,
  ARCHIVE_DATA_WARN,
  ARCHIVE_IT,
  ARCHIVE_SUGGEST,
  ARE_YOU_SURE,
  DELETE,
  DELETE_DATA_WARN,
  DELETE_IT,
  DELETE_SUGGEST,
  ERROR_WARN,
  INSERT,
  INSERT_DATA_WARN,
  INSERT_IT,
  INSERT_SUGGEST,
  SUCCESS,
  TRY_AGAIN,
  UNARCHIVE,
  UNARCHIVE_DATA_WARN,
  UNARCHIVE_IT,
  UNARCHIVE_SUGGEST,
} from "./MyConstants";

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
