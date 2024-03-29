export const API_END_POINT = "https://kdt-frontend.todo-api.programmers.co.kr";

export const request = async (url, options = {}) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const json = await res.json();
      return json;
    } else {
      throw new Error("API 호출 오류");
    }
  } catch (error) {
    alert(e.message);
  }
};
