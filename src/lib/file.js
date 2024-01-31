import axios from "axios";
import { saveAs } from "file-saver";

export const downloadFile = async (imageUrl, fileName) => {
  window.open(imageUrl, "_blank");
};
