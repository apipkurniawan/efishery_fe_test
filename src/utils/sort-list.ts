export const SortNumber = (list: number[]) => list.sort((a, b) => a - b);
export const SortObject = (list: any[], filterBy: string, sortKey: string) =>
  list.sort((a, b) =>
    a[filterBy] < b[filterBy]
      ? sortKey === "DESC"
        ? 1
        : -1
      : a[filterBy] > b[filterBy]
      ? sortKey === "DESC"
        ? -1
        : 1
      : 0
  );
