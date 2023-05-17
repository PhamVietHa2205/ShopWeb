import moment from "moment";

export const formatNumber = (value: number, digit: number) => {
    if (value && !isNaN(value))
        return Intl.NumberFormat('en-US', {
            minimumFractionDigits: digit,
            maximumFractionDigits: digit,
        }).format(value);
    return "";
}

export const formatDate = (value: string) => {
    if (value) {
        return moment(value).format("DD/MM/YYYY HH:mm:ss");
    }
    return '';
}