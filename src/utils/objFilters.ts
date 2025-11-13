export const objFilters = (obj: Record<string, any>): Record<string, any> => {
  const filtered: Record<string, any> = {};
  for (const key in obj) {
    if (obj[key] !== undefined && obj[key] !== null && obj[key] !== '') {
      filtered[key] = obj[key];
    }
  }
  return filtered;
};
