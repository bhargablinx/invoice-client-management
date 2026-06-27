export function getInitials(name) {
    if (!name || typeof name !== "string") return "";

    return name
        .trim() // Remove leading/trailing whitespace
        .split(/\s+/) // Split by one or more spaces (handles multiple spaces)
        .map((word) => word[0]) // Take the first character of each word
        .join("") // Join them back into a single string
        .toUpperCase(); // Convert to uppercase (optional, but standard for initials)
}
