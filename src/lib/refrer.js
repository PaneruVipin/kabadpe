export const openNewWindow = (url, close = 10000) => {
  const popupFeatures = "width=1,height=1,top=10000,left=10000";
  const popupWindow = window.open(url, "_blank", popupFeatures);
  if (close) {
    setTimeout(() => {
      if (popupWindow) {
        popupWindow.close();
      }
    }, close);
  }
};
