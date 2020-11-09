const fs = require('fs').promises;

async function start() {
  const allCountries = await fs.readFile('./countries-original.json', 'utf-8');
  const json = JSON.parse(allCountries);

  const transformed = json.countries
    .filter((item) => item.numericCode !== null && item.population >= 1_000_000)
    .map(({ name, population, region, flag, area }, index) => {
      return { id: index + 1, name, population, region, area, flag };
    });

  fs.writeFile(
    './countries.json',
    JSON.stringify({ countries: transformed }, null, 2)
  );
}

start();
