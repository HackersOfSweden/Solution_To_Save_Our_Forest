let url = 'https://auth.skogsstyrelsen.se/connect/token';
let client_id = '17ffaee2-44f6-4c9f-b320-90a17c531f5f';
let client_secret = 'dafa5c9b-b7ac-993f-473d-7f971cec4f03';
let scope = 'sks_api';

let resp = fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret + '&scope=' + scope,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*'
    }
}).then(response => console.log('Bearer Token: ' + console.log(JSON.stringify(response))));