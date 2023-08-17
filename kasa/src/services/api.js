// services/api.js

export async function fetchAppartements() {
  try {
    const response = await fetch("../../src/data.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
