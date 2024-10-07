import { nanoid } from "nanoid";

// Function to generate a unique SKU using UUID
export const generateUniqueSku = () => {
  const uniqueId = nanoid(8); // Generate an 8-character unique ID
  return `SKU-${uniqueId}`; // Return SKU with the prefix 'SKU-'
};
