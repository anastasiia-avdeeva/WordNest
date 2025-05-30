export function capitalizeStr(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function sortByName(objArr) {
  return objArr.toSorted((a, b) =>
    a.word.localeCompare(b.word, "ru", { sensitivity: "base" })
  );
}
