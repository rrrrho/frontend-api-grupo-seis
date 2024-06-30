import { Icon } from "@chakra-ui/react";
import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// format prices - example: $10.000,00
export function formatPrice(num: number): string {
    const str: string = num.toFixed(2);
    const parts: string[] = str.split(".");
    
    let integer: string = parts[0];
    const decimal: string = parts[1];

    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return `${integer},${decimal}`;
}

// limit title lenght and adds '...' 
export function cutTitle(title: string): string {
    if (title.length > 50) {
        return title.substring(0, 50) + "...";
    }
    return title;
}

// limit keyword lenght and adds '...' 
export function cutKeyword(keyword: string): string {
    if (keyword.length > 10) {
        return keyword.substring(0, 10) + "...";
    }
    return keyword;
}

// calculates discounts based on percentages
export function calculateDiscount(price: number, percentage: number): number {
    if (percentage < 0 || percentage > 100) {
        return 0;
    }

    const discount = price * (percentage / 100);
    const total = price - discount;

    return total;
}

// returns a star line component based on rating
export function generateRating(rating: number): JSX.Element[] {
    const icons: JSX.Element[] = [];
    const maxRating = 5;
    const roundedRating = Math.round(rating);
    const decimals = rating % 1;

    for (let i = 1; i <= maxRating; i++) {
        if (i < roundedRating || (i === roundedRating && decimals < 0.5)) {
            icons.push(
                <Icon 
                as={FaStar} 
                color="brand.darkMustard"
                key={i}
                boxSize={{base: '3', xl: '4'}}
                />);
        } else if (i === roundedRating) {
            icons.push(
                <Icon 
                as={FaStarHalfAlt} 
                color="brand.darkMustard"
                key={i}
                boxSize={{base: '3', xl: '4'}}
                />);
        } else {
            icons.push(
                <Icon 
                as={FaRegStar} 
                color="brand.darkMustard"
                key={i}
                boxSize={{base: '3', xl: '4'}}
                />);
        }
    }

    return icons;
}