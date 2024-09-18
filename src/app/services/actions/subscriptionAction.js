"use server";
export const subscriptionAction = async (data) => {
  const email = { email: data };
  const res = await fetch(`${process.env.NEXT_URL}/subscription`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(email),
  });
  return res.json();
};
