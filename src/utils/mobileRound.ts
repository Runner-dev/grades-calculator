export default function mobileRound(val: number) {
  return val;
  return Math.round((val - 0.01) * 2) / 2;
}
