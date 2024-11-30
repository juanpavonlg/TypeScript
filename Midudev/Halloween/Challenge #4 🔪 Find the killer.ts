function findTheKiller(whisper: string, suspects: string[]): string {
  whisper = whisper.replace(/~/g, ".");
  const regex = RegExp(`^${whisper}`, "i");
  const killers: string[] = [];
  for (const suspect of suspects) {
    if (regex.test(suspect)) {
      killers.push(suspect);
    }
  }
  return killers.join(",");
} // findTheKiller()

console.log(findTheKiller("d~~~~~a", ["Dracula", "Freddy Krueger", "Jason Voorhees", "Michael Myers"]));
console.log(findTheKiller("~r~dd~", ["Freddy", "Freddier", "Fredderic"]));
console.log(findTheKiller("~r~dd$", ["Freddy", "Freddier", "Fredderic"]));
console.log(findTheKiller("mi~~def", ["Midudev", "Midu", "Madeval"]));
console.log(findTheKiller("~~~~~~$", ["Pennywise", "Leatherface", "Agatha"]));
