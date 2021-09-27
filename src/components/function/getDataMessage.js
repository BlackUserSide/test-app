export const getDataMessage = () => {
  const data = localStorage.getItem("message");
  const parseData = JSON.parse(data);
  if (data && data.length !== 0) {
  }
};
