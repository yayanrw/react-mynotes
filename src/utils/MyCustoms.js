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

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

const confirmationDialog = (type, callBack) => {
  let warn_text;
  let suggestion_text;
  switch (type) {
    case INSERT:
      warn_text = INSERT_DATA_WARN;
      suggestion_text = INSERT_IT;
      break;
    case DELETE:
      warn_text = DELETE_DATA_WARN;
      suggestion_text = DELETE_IT;
      break;
    case ARCHIVE:
      warn_text = ARCHIVE_DATA_WARN;
      suggestion_text = ARCHIVE_IT;
      break;
    case UNARCHIVE:
      warn_text = UNARCHIVE_DATA_WARN;
      suggestion_text = UNARCHIVE_IT;
      break;
    default:
      warn_text = ERROR_WARN;
      suggestion_text = TRY_AGAIN;
      break;
  }

  Swal.fire({
    title: ARE_YOU_SURE,
    text: warn_text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: suggestion_text,
  }).then((result) => {
    if (result.isConfirmed) {
      callBack(true);
    } else {
      callBack(false);
    }
  });
};

const swalSuccess = (type) => {
  let suggestion_text;
  switch (type) {
    case INSERT:
      suggestion_text = INSERT_SUGGEST;
      break;
    case DELETE:
      suggestion_text = DELETE_SUGGEST;
      break;
    case ARCHIVE:
      suggestion_text = ARCHIVE_SUGGEST;
      break;
    case UNARCHIVE:
      suggestion_text = UNARCHIVE_SUGGEST;
      break;
    default:
      suggestion_text = TRY_AGAIN;
      break;
  }
  Swal.fire(SUCCESS, suggestion_text, "success");
};

export { showFormattedDate, confirmationDialog, swalSuccess };
