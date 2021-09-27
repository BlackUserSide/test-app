export const updateMessage = () => {
  const dataMessage = localStorage.getItem("dataMessage");
  const parseData = JSON.parse(dataMessage);
  return parseData;
};
