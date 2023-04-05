export const formatNumber = (value: number, digit: number) => {
    if (value && !isNaN(value))
        return Intl.NumberFormat('en-US', {
            minimumFractionDigits: digit,
            maximumFractionDigits: digit,
        }).format(value);
    return "";
}