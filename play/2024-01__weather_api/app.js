const myurl = `${process.env.API_URL}data?datasetid=GHCND&startdate=2020-05-01&enddate=2020-05-01&offset=20000`;
console.log(myurl);
fetch(myurl, { headers: { token: `${process.env.API_KEY}` } })
    .then((response) => {
        console.log('then-response');
        if (!response.ok) {
            return response.text().then((text) => {
                console.log('!response.ok');
                return Promise.reject(text);
            });
        }
        return response.json();
    })
    .then((data) => {
        console.log('D: ', data);
    })
    .catch((error) => {
        console.log('E: ' + error);
    });
