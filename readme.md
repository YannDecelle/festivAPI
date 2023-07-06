# FestivAPI

FestivAPI is an npm library that provides an API for retrieving festival data in France. It fetches festival information from the French Ministry of Culture's dataset and returns the data in a structured format.

## Installation

To install the FestivAPI library, use npm:

```bash
npm i festivapi
```

## Usage

The library exports a single function called `GetFestivData`. It fetches the festival data and returns a promise that resolves to an array of festival objects.

```javascript
const GetFestivData = require('festivapi');

// Example usage
GetFestivData()
  .then(data => {
    // Process the festival data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
```

## Example Usage

Here's an example of how you can use the FestivAPI library in an application:

1. Install the FestivAPI library as mentioned in the installation section.

2. In your React or Vue component, import the `GetFestivData` function:

```javascript
import GetFestivData from 'festivapi';
```

3. Use the function in your component's code to fetch and process the festival data:

```vue
<template>
  <div id="app">
    <table>
      <thead>
        <tr>
          <th>Nom de la manifestation</th>
          <th>Région</th>
          <th>Domaine</th>
          <th>Complément de domaine</th>
          <th>Département</th>
          <th>Mois habituel de début</th>
          <th>Date de début (ancien)</th>
          <th>Date de fin (ancien)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="festival in festivals" :key="festival.nom_de_la_manifestation">
          <td>{{ festival.nom_de_la_manifestation }}</td>
          <td>{{ festival.region }}</td>
          <td>{{ festival.domaine }}</td>
          <td>{{ festival.complement_domaine }}</td>
          <td>{{ festival.departement }}</td>
          <td>{{ festival.mois_habituel_de_debut }}</td>
          <td>{{ festival.date_debut_ancien }}</td>
          <td>{{ festival.date_de_fin_ancien }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import GetFestivData from 'festivapi';

export default {
  name: 'App',
  data() {
    return {
      festivals: []
    };
  },
  async created() {
    // Fetch the festival data when the component is created
    this.festivals = await GetFestivData();
  }
};
</script>

```

## License

This project is licensed under the [MIT License](LICENSE).

## Disclaimer

This is a school project for the IIM DIGITAL SCHOOL