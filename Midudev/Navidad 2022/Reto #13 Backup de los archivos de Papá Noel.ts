function getFilesToBackup(lastBackup: number, changes: [number, number][]) {
  const files = changes.filter((e) => e[1] > lastBackup).map((e) => e[0]);
  return [...new Set(files)].sort((a, b) => a - b);
} // getFilesToBackup()

const lastBackup = 1546300800;
const changes: [number, number][] = [
  [3, 1546301100],
  [2, 1546300800],
  [1, 1546300800],
  [1, 1546300900],
  [1, 1546301000],
];
console.log(getFilesToBackup(lastBackup, changes));
