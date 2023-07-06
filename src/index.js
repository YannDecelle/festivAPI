function GetFestivData () {
  const url = 'https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&lang=fr&facet=region&facet=domaine&facet=complement_domaine&facet=departement&facet=mois_habituel_de_debut'

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      const tokens = {
        records: 'records',
        fields: 'fields',
        nom_de_la_manifestation: 'nom_de_la_manifestation',
        region: 'region',
        domaine: 'domaine',
        complement_domaine: 'complement_domaine',
        departement: 'departement',
        mois_habituel_de_debut: 'mois_habituel_de_debut',
        date_debut_ancien: 'date_debut_ancien',
        date_de_fin_ancien: 'date_de_fin_ancien'
      }
      const result = []
      for (let i = 0; i < data[tokens.records].length; i++) {
        const record = data[tokens.records][i]
        const fields = record[tokens.fields]
        const festival = {
          nom_de_la_manifestation: fields[tokens.nom_de_la_manifestation],
          region: fields[tokens.region],
          domaine: fields[tokens.domaine],
          complement_domaine: fields[tokens.complement_domaine],
          departement: fields[tokens.departement],
          mois_habituel_de_debut: fields[tokens.mois_habituel_de_debut],
          date_debut_ancien: fields[tokens.date_debut_ancien],
          date_de_fin_ancien: fields[tokens.date_de_fin_ancien]
        }
        result.push(festival)
      }

      return result
    })
}
module.exports = GetFestivData
