/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const newStringArr = [...arr];

  const compareStrings = (str1, str2) => {
    return str1.localeCompare(str2, [], { caseFirst: "upper" });
  };

  return newStringArr.sort((a, b) => {
    return param === "asc" ? compareStrings(a, b) : compareStrings(b, a);
  });
}
