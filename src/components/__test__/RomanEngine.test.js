import romanConverter from "../RomanEngine";

it ('The engine is inicialited in 1', () => {
    const engine = romanConverter(1)
    expect(engine).toBe('I');
})

it ('The engine is inicialited in 5', () => {
    const engine = romanConverter(5)
    expect(engine).toBe('V');
})

it ('The engine is inicialited in 4', () => {
    const engine = romanConverter(4)
    expect(engine).toBe('IV');
})