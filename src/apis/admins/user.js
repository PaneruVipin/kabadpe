export const userProfileImageAdd = resolvePromise(async (image) => {
    const apiUrl = ENV_API_BASE_URL + `/user/profileimage`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.post(
      apiUrl,
      { image },
      {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res?.message;
  });