import { notification } from "antd";

export function formatEpochTimestamp(epochTimestampString: string) {
  const epochTimestamp = parseInt(epochTimestampString);

  if (isNaN(epochTimestamp)) return 0;

  // Create a new Date object from the epoch timestamp (in milliseconds)
  const date = new Date(epochTimestamp * 1000); // Multiply by 1000 to convert to milliseconds

  // Extract date components
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  // Create a formatted date string
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return formattedDate;
}

export const openNotification = (status: string, responseMessage: string) => {
  if (status == "success") {
    notification.success({
      message: responseMessage,
      placement: "bottomRight",
      closeIcon: false,
    });
  } else if (status === "error") {
    notification.error({
      message: responseMessage,
      placement: "bottomRight",
      closeIcon: false,
    });
  } else {
    notification.info({
      message: responseMessage,
      placement: "bottomRight",
      closeIcon: false,
    });
  }
};
