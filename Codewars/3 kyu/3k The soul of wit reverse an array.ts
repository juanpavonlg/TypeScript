export let reverse=(a:any)=>[...a].map(a.pop,a) // reverse()
// export let reverse=(a:any)=>a.map(a.pop,[...a])

console.log(reverse([1, 2, 3]));
