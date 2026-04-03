type Box = {
  l: number;
  w: number;
  h: number;
};

function fitsInOneBox(boxes: Box[]) {
  boxes.sort((a, b) => a.l + a.w + a.h - b.l - b.w - b.h);
  return boxes.slice(1).every((box, i) => {
    return box.l > boxes[i].l && box.w > boxes[i].w && box.h > boxes[i].h;
  });
} // fitsInOneBox()

console.log(
  fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
  ]),
);
console.log(
  fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 },
  ]),
);
console.log(
  fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 },
  ]),
);
