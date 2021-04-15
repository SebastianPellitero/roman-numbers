const ROMANSYMBOLS = new Map([[1, "I"], [5, "V"], [ 10, "X"], [50, "L"], [100, "C"], [500, "D"], [1000, "M"] ]);

const getRomanSymbol = (number) => {
    return ROMANSYMBOLS.get(number);
};

export default getRomanSymbol;