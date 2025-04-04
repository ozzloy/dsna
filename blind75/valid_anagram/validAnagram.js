class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const count = {};
    for (const c of s) count[c] = (count[c] || 0) + 1;
    for (const c of t)
      if (count[c]) count[c]--;
      else return false;
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
