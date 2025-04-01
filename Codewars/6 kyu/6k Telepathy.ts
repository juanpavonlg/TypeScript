export const magicShow = (ans: string): number => ans.match(/Y|N/g)!.reduce((a,e,i)=>a+2**i*(e=="Y"?1:0),0);

console.log(
  magicShow(
    "| Card 1: Yes | Card 2: Yes | Card 3: Yes | Card 4: Yes | Card 5: No | Card 6: Yes |"
  )
);
