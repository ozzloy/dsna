class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(numbers) {
    const seen = new Set();
    for (const number of numbers)
      if (seen.has(number)) return true;
      else seen.add(number);
    return false;
  }
}

nums00 = [1, 2, 3, 3];
expect00 = true;

nums01 = [1, 2, 3, 4];
expect01 = false;

const test = (name, nums, expect) => {
  const solver = new Solution();
  const actual = solver.hasDuplicate(nums);
  if (expect === actual) return;
  console.log("name", name);
  console.log("nums", nums);
  console.log("expect", expect);
  console.log("actual", actual);
  process.exit(1);
};

test("00", nums00, expect00);
test("01", nums01, expect01);
