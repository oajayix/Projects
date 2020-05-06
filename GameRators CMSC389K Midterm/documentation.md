
# PROJECT NAME

---

Name: Olayemi Ajayi

Date: November 1, 2019

Project Topic: Game Reviews

URL: http://localhost:3000/

---


### 1. Data Format and Storage

Data point fields:
- `Field 1`: Title         `Type: String`
- `Field 2`: Studio        `Type: String`
- `Field 3`: Rating        `Type: Number`
- `Field 4`: Year          `Type: Number`
- `Field 5`: Tag           `Type: [String]`

Schema:
```javascript
{
  title: String,
  studio: String,
  rating: Number,
  year: Number,
  tag: [String]
}
```

### 2. Add New Data

HTML form route: `/create`

POST endpoint route: `/create...`

Example Node.js POST request to endpoint:
```javascript
var request = require("request");

var options = {
    method: 'POST',
    url: 'http://localhost:3000/api/create...',
    headers: {
        'content-type': 'application/x-www-form-urlencoded'
    },
    form: {
      title: 'Mario Kart DS'
      studio: 'Nintendo'
      rating: 10
      year: 2006
      tag: [Racer]

    }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

### 3. View Data

GET endpoint route: `/api/getGames`

### 4. Search Data

Search Field: name

### 5. Navigation Pages

Navigation Filters
1. All the games in no order -> `  /Games  `
2. Best Game by rating -> `  /BestGames   `
3. Most Recent Game in terms of years -> `/MostRecentGame    `
4. Oldest Game by years -> `  /OldestGame  `
5. A Game for everyone, based on the number of tags -> `  /FunGame  `
