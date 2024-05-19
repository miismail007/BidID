import { ApiDataType } from "./types";

export function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export function getUserCount(data : Array<ApiDataType>, countryName: string){
    const countryData = data.filter(country => country.name === countryName);
    // Check if Albania was found and log the userCount
    if (countryData.length > 0) {
        return countryData[0].userCount;
    }else{
        return 0
    }
}

export function getTotalCount(data : Array<ApiDataType>) {
    let count = 0;
    data.forEach(country => {
        count += country.userCount
    })
    return count
}