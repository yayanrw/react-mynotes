import moment from "moment";
import "moment/min/locales";

const showFormattedDate = (date, lang) => {
  moment.locale(lang);
  const localDateTime = moment(date).format("llll");
  return localDateTime;
};

export { showFormattedDate };
