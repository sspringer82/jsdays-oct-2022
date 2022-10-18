import MapUser from './mapUser';
import { jest } from '@jest/globals';

describe('MapUser', () => {
  let mu;
  beforeEach(() => {
    mu = new MapUser();
  });

  const original = { id: 1, firstName: 'Klaus', lastName: 'Meier' };

  describe('map the keys', () => {
    it('should have a map method', () => {
      expect(mu.map).toBeDefined();
    });
    it('should map the original structure to the destination structure', () => {
      const result = mu.map(original);

      expect(result.id).toBe(1);
      expect(result.first_name).toBe('Klaus');
      expect(result.last_name).toBe('Meier');
      expect(result.user_name).toEqual(expect.any(String));
    });

    it('should map the original structure to the destination structure', () => {
      const original = { id: 2, firstName: 'Claudia', lastName: 'Meier' };

      const result = mu.map(original);

      expect(result.id).toBe(2);
      expect(result.first_name).toBe('Claudia');
      expect(result.last_name).toBe('Meier');
    });
  });
  describe('mapUsername', () => {
    it('should have a map method', () => {
      expect(mu.mapUsername).toBeDefined();
    });

    it('should limit the length to 8', () => {
      const username = '123456789';
      expect(username.length).toBe(9);
      const result = mu.mapUsername(username);
      expect(result.length).toBe(8);
    });
  });

  describe('integration', () => {
    it('should call mapUsername, when mapping', () => {
      mu.mapUsername = jest.fn();
      mu.map(original);
      expect(mu.mapUsername).toHaveBeenCalled();
      expect(mu.mapUsername).toHaveBeenCalledTimes(1);
      expect(mu.mapUsername).toHaveBeenCalledWith('Klaus', 'Meier');
    });

    it('should call mapUsername, when mapping', () => {
      mu.mapUsername = jest.fn();
      mu.mapUsername.mockReturnValue('12345678');
      const result = mu.map(original);
      expect(result).toEqual({
        first_name: 'Klaus',
        id: 1,
        last_name: 'Meier',
        user_name: '12345678',
      });
    });
  });

  it('should throw', () => {
    expect(() => mu.myException()).toThrow();
    expect(() => mu.myException()).toThrowError('whoops');
  });

  it('should async', (done) => {
    const p = mu.myAsync();
    p.then((data) => {
      expect(data).toBe('whoooho');
      done();
    });
  });
  it('should async', async () => {
    const data = await mu.myAsync();
    expect(data).toBe('whoooho');
  });
});
