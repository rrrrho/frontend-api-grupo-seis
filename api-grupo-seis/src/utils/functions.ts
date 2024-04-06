export function formatPrice(num: number): string {
    const str: string = num.toFixed(2);
    const parts: string[] = str.split(".");
    
    let integer: string = parts[0];
    const decimal: string = parts[1];

    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return `${integer},${decimal}`;
}

export function cutTitle(title: string): string {
    if (title.length > 50) {
        return title.substring(0, 50) + "...";
    }
    return title;
}

export function calculateDiscount(price: number, percentage: number): number {
    if (percentage < 0 || percentage > 100) {
        return 0;
    }

    const discount = price * (percentage / 100);
    const total = price - discount;

    return total;
}