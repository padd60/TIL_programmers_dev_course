const API_END_POINT = "https://kdt.roto.codes";

export const request = async (url) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`);

    if (!res.ok) {
      throw new Error("요청에 오류가 발생했습니다.");
    }

    return await res.json();
  } catch (error) {
    alert(error.message);
  }
};
