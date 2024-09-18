"use server";

export const teamRequestAction = async (data) => {
    const res = await fetch(`${process.env.NEXT_URL}/teamRequest`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return res.json();
};
