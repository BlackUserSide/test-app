export const addMessage = (dataMessage) => {
  const dataLocal = localStorage.getItem("dataMessage");
  console.log(isNaN(dataLocal));
  if (isNaN(dataLocal)) {
    const parseData = JSON.parse(dataLocal);
    if (parseData.length > 25) {
      parseData.shift();
    }
    parseData.push(dataMessage);
    const newData = JSON.stringify(parseData);
    localStorage.setItem("dataMessage", newData);
  } else {
    const newData = [];
    newData.push(dataMessage);
    localStorage.setItem("dataMessage", JSON.stringify(newData));
  }
};
