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

  function convertToWords(n, suffix) {
    if (n === 0) return "";

    let str = "";
    if (n > 19) {
      str += tens[Math.floor(n / 10)] + " " + units[n % 10];
    } else if (n > 10) {
      str += teens[n - 11];
    } else {
      str += units[n];
    }
    return str.trim() + " " + suffix + " ";
  }

  let output = "";
  let count = 0;

  while (num > 0) {
    let rem = num % 100;
    if (rem > 0) {
      output = convertToWords(rem, thousands[count]) + output;
    }
    count++;
    num = Math.floor(num / 100);
  }

  return output.trim();
}