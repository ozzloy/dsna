class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    // if s and t have different lengths, they're not anagrams
    if (s.length !== t.length) return false;
    // count how many times each character occurs in s
    const count = {};
    for (const c of s) count[c] = (count[c] || 0) + 1;
    // go through all the characters of t
    // if the character's count is more than 0
    for (const c of t)
      if (count[c])
        // decrement the count of that character
        count[c]--;
      // if the count was already 0, or undefined
      // s and t aren't anagrams
      else return false;
    // s and t are anagrams
    return true;
  }
}

s00 = "racecar";
t00 = "carrace";
expect00 = true;

s01 = "jar";
t01 = "jam";
expect01 = false;

const test = (name, s, t, expect) => {
  const solver = new Solution();
  const actual = solver.isAnagram(s, t);
  if (expect === actual) return;
  console.log("name", name);
  console.log("s", s);
  console.log("t", t);
  console.log("expect", expect);
  console.log("actual", actual);
  process.exit(1);
};

test("00", s00, t00, expect00);
test("01", s01, t01, expect01);
