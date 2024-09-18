"use server";
export const contactUsAction = async (data) => {
  const res = await fetch(`${process.env.NEXT_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
