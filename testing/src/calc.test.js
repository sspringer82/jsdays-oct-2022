import Calc from './calc';

describe('Calc', () => {
  let calc;
  beforeEach(() => {
    // Arrange
    calc = new Calc();
  });

  it('should have an add method', () => {
    expect(calc.add).toBeDefined();
  });

  it('should add 1 and 2 and return 3', () => {
    // Act
    const result = calc.add(1, 2);

    // Assert
    expect(result).toBe(3);
  });

  it('should add 2 and 2 and return 4', () => {
    const result = calc.add(2, 2);
    expect(result).toBe(4);
  });

  it('should add -1 and 1 and return 0', () => {
    const result = calc.add(-1, 1);
    expect(result).toBe(0);
  });

  it('n/a', () => {
    const result = calc.add(Number.MAX_SAFE_INTEGER, 4);
    expect(result).toBe(9007199254740995);
  });

  it('should add', () => expect(new Calc().add(1, 2)).toBe(3));
});
