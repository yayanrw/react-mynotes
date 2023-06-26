const showFormattedDate = (date, lang) => {
  if (date && typeof date === "object") {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString(lang, options);
  }

  return ""; // or any default value you prefer
};

export { showFormattedDate };
