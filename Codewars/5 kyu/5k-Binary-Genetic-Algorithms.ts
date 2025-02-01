export class GeneticAlgorithm {
  generate(length: number) {
    return Array(length).fill(0).map(() => Math.round(Math.random())).join("");
  } // generate()

  select(population: string[], fitnesses: number[]) {
    const chromosomes: string[] = [];
    const totalFitness = fitnesses.reduce((a, e) => a + e);
    let probability = 0;
    const rouletteWheel: number[] = [];
    for (const fitness of fitnesses) {
      probability += fitness / totalFitness;
      rouletteWheel.push(probability);
    }
    for (let i = 0; i < 2; i++) {
      const random = Math.random();
      let index = 0;
      while (rouletteWheel[index] < random) {
        index++;
      }
      chromosomes.push(population[index]);
    }
    return chromosomes;
  } // select()

  mutate(chromosome: string, p: number) {
    return [...chromosome].map((bit) => (Math.random() >= p ? bit : Math.abs(+bit - 1))).join("");
  } // mutate()

  crossover(chromosome1: string, chromosome2: string) {
    const bit = Math.floor(Math.random() * chromosome1.length);
    return [chromosome1.slice(0, bit) + chromosome2.slice(bit), chromosome2.slice(0, bit) + chromosome1.slice(bit)];
  } // crossover()

  run(fitness: (chromosome: string) => number, length: number, p_c: number, p_m: number, iterations = 100) {
    let population: string[] = [];
    for (let i = 0; i < 100; i++) {
      population.push(this.generate(length));
    }
    for (let i = 0; i < iterations; i++) {
      const fitnesses = population.map(fitness);
      const newPopulation: string[] = [];
      while (newPopulation.length < population.length) {
        let [chromosome1, chromosome2] = this.select(population, fitnesses);
        if (Math.random() < p_c) {
          [chromosome1, chromosome2] = this.crossover(chromosome1, chromosome2);
        }
        chromosome1 = this.mutate(chromosome1, p_m);
        chromosome2 = this.mutate(chromosome2, p_m);
        newPopulation.push(chromosome1, chromosome2);
      }
      population = newPopulation;
    }
    const fitnesses = population.map(fitness);
    return population[fitnesses.indexOf(Math.max(...fitnesses))];
  } // run()
} // GeneticAlgorithm()

function fitness(chromosome: string): number {
  const obj = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let sum = 0;
  let prod = 1;
  for (let i = 0; i < chromosome.length; i++) {
    if (+chromosome[i]) {
      prod *= obj[i];
    } else {
      sum += obj[i];
    }
  }
  return 1 / (Math.sqrt((sum - 38) ** 2 + (prod - 210) ** 2) + 1);
} // fitness()

const geneticAlgorithm = new GeneticAlgorithm();
const chromosome = geneticAlgorithm.run(fitness, 10, 0.6, 0.002);
console.log(chromosome);
console.log(fitness(chromosome));
