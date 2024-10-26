export function capitalizeFirstLetter(string) {
    if (!string) return ''; // Handle empty string case
    return string.charAt(0).toUpperCase() + string.slice(1);
}