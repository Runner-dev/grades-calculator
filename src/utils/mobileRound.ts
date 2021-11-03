export default function mobileRound(val: number) {
  return Math.round((val - 0.01) * 2) / 2;
}
