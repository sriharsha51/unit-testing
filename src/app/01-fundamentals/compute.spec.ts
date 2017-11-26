// all the test files should have .spec.ts extension
// karma will run the tests in all the spec files
// 'describe' is used to define a suite which is a group of related tests
// 'it' to define spec
// we need to test all the execution paths.(compute function has two execution paths.)
import { compute } from './compute';

describe('compute', () => {
  it('should return 0 if i/p is -ve', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  })
  it('should return incremented number if i/p is +ve', () => {
    const result = compute(1);
    expect(result).toBe(2);
  })
}) // in describe, first argument is the name of the suite and second is the function we need to test.