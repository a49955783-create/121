export function calculateScores(grades = []) {
  return grades.reduce((total, g) => total + Number(g.value || 0), 0);
}
