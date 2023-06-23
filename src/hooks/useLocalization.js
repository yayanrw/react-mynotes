import { useContext } from "react";
import { contents } from "../utils/contents";
import LocalizationContext from "../contexts/LocalizationContext";

const useLocalization = (type) => {
  const { localization } = useContext(LocalizationContext);

  const text = contents[type][localization];
  return text;
};

export default useLocalization;
