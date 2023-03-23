export const formatNumber = (value, digit) => {
    if (value && !isNaN(value))
        return Intl.NumberFormat('en-US', {
            minimumFractionDigits: digit,
            maximumFractionDigits: digit,
        }).format(value);
    return "";
}