class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    console.log("nums", nums);
  }
}

nums00 = [2, 20, 4, 10, 3, 4, 5];
expect00 = 4;

nums01 = [0, 3, 2, 5, 4, 6, 1, 1];
expect01 = 7;

const test = (name, nums, expect) => {
  const solver = new Solution();
  const actual = solver.isAnagram(s, t);
  if (expect === actual) return;
  console.log("name", name);
  console.log("nums", nums);
  console.log("expect", expect);
  console.log("actual", actual);
  process.exit(1);
};

test("00", nums00, expect00);
test("01", nums01, expect01);
