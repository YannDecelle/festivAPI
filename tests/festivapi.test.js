const GetFestivData = require('../src/index')

test('GetFestivData', async () => {
  const data = await GetFestivData()
  console.log(JSON.stringify(data, null, 0))
})

test('GetFestivData', async () => {
  const data = await GetFestivData()

  // Check if the data array has at least one element
  expect(data.length).toBeGreaterThan(0)

  // Check if the required fields are defined in the first element of the data array
  expect(data[0].nom_de_la_manifestation).toBeDefined()
  expect(data[0].region).toBeDefined()
  expect(data[0].domaine).toBeDefined()
  expect(data[0].complement_domaine).toBeDefined()
  expect(data[0].departement).toBeDefined()
  expect(data[0].mois_habituel_de_debut).toBeDefined()
  expect(data[0].date_debut_ancien).toBeDefined()
  expect(data[0].date_de_fin_ancien).toBeDefined()
})
