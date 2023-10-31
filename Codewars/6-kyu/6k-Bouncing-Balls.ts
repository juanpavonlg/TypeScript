export function bouncingBall(h: number, bounce: number, window: number): number {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    return 2 + bouncingBall(h * bounce, bounce, window);
  }
  return -1;
} // bouncingBall()

console.log(bouncingBall(3, 0.66, 1.5));
console.log(bouncingBall(30, 0.66, 1.5));
console.log(bouncingBall(30, 0.75, 1.5));
console.log(bouncingBall(30, 0.4, 10));
