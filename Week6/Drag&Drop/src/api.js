const API_END_POINT = "https://todo-api.roto.codes/hsna";

export const request = async (url, option) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`, option);

    if (!res.ok) {
      throw new Error("호출 실패");
    }
    return await res.json();
  } catch (error) {
    alert(error.message);
  }
};
