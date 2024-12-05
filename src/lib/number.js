export function calculatePercentageValue(percentage, whole) {
  let value = (percentage / 100) * whole;
  return value;
}

export function numberToWords(num) {
  if (num === 0) return "Zero";

  const units = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const teens = [
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  const thousands = ["", "Thousand", "Lakh", "Crore"];

  function convertToWords(n) {
    let str = "";
    if (n >= 100) {
      str += units[Math.floor(n / 100)] + " Hundred ";
      n %= 100;
    }
    if (n >= 20) {
      str += tens[Math.floor(n / 10)] + " " + units[n % 10];
    } else if (n >= 11) {
      str += teens[n - 11];
    } else if (n > 0) {
      str += units[n];
    }
    return str.trim();
  }

  let output = "";
  let parts = [];

  // Split the number as per the Indian numbering system
  parts.push(num % 1000); // Last three digits
  num = Math.floor(num / 1000);

  while (num > 0) {
    parts.push(num % 100); // Groups of two digits (Lakh, Crore)
    num = Math.floor(num / 100);
  }

  for (let i = parts.length - 1; i >= 0; i--) {
    if (parts[i] > 0) {
      output += convertToWords(parts[i]) + " " + thousands[i] + " ";
    }
  }

  return output.trim();
}
