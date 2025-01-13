export const numberWithCommas = (x: number) => {
    if (x) {        
        const y =  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return y;
    } else {
        return "0";
    }
}
