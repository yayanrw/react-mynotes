const showFormattedDate = (date, lang) => {
  if (!date) {
    return "";
  }

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString(lang, options);
};

export { showFormattedDate };
