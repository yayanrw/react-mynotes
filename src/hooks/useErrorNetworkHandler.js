import { useState } from "react";
import useLocalization from "./useLocalization";
import { swalError, swalWarning } from "../utils/swal_helper";
import {
  ApplicationException,
  ServerException,
} from "../utils/exceptions_helper";

const useErrorNetworkHandler = () => {
  const [error, setError] = useState({});
  const localizationSwal = useLocalization("swal");

  const handleApiError = (error) => {
    if (error instanceof ApplicationException) {
      swalWarning(localizationSwal.warning, error.message);
    } else if (error instanceof ServerException) {
      swalError(localizationSwal.serverError, error.message);
    } else {
      swalError(localizationSwal.anErrorOccured, error.message);
    }
    setError(error);
  };

  return {
    error,
    handleApiError,
  };
};

export default useErrorNetworkHandler;
