import { describe, expect, it } from 'vitest';

import { digity } from '../src';

describe('digity', () => {
  it('should be defined', () => {
    expect(digity).toBeDefined();
  });

  it('should throw an error: args not valid integer', () => {
    expect(() => digity(5.5)).toThrow('type of length must be integer');
  });

  it('should throw an error: length lower than 1', () => {
    expect(() => digity(1)).toThrow('length of code cannot <= 1');
  });

  it('should generate 5-digit number', () => {
    expect(digity(5).toString().length).toBe(5);
  });
});
