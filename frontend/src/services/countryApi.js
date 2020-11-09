let allCountries = [];
let fetchedAllCountries = false;

async function getAllCountries() {
  if (allCountries.length > 0 && fetchedAllCountries) {
    console.log('Obtendo todos os países do cache...');
    return [...allCountries];
  }

  console.log('Obtendo todos os países do backend...');
  const resource = await fetch('http://localhost:3001/countries');
  const json = await resource.json();

  allCountries = [...json];
  fetchedAllCountries = true;
  return [...allCountries];
}

async function getCountry(id) {
  const numberId = parseInt(id, 10);

  const cachedCountry = allCountries.find((country) => country.id === numberId);

  if (cachedCountry) {
    console.log(`Obtendo do dados país com id ${id} do cache...`);
    return { ...cachedCountry };
  }

  console.log(`Obtendo dados do país com id ${id} do backend...`);
  const resource = await fetch(`http://localhost:3001/countries/${id}`);
  const country = await resource.json();
  allCountries.push(country);

  return { ...country };
}

export { getAllCountries, getCountry };
