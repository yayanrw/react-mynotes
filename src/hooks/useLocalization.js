import { useContext } from "react";
import { myContents } from "../utils/MyContents";
import LocalizationContext from "../contexts/LocalizationContext";

const useLocalization = (type) => {
  const { localization } = useContext(LocalizationContext);

  const text = myContents[type][localization];
  return text;
};

export default useLocalization;
