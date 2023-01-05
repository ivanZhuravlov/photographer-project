export const dayMonthYear = (value: Date | string): string => {
  if (!value) return value;
  const date = new Date(value);

  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  let day: number | string = date.getDate();
  day = day < 10 ? "0" + day : day;
  return `${day} ${month} ${year}`;
};
