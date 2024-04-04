function loadData() {
    fetch("data.json") // without the slash it is a relative url, if you put in the / we’re going to the root of the URL.
    .then(response => { // We ask this browser to load this, this is a “promise”. Whenever this has finished, do something.
        console.log(response);
        return response.json(); // this transforms the data and turns it to a json, then we use the json data and do stuff with it.
    })
    .then(json => { // When the previous 'then' has completed successfully, this one will run.
        console.log(json);
    });
}

function loadData() {
    fetch("data.json") // think about quotation marks
    .then(response => { //think about the paranthesis
    console.log(response);
    return response.json(); // this transforms the data and turns it to a json, then we use the json data and do stuff with it.
    })
    
    .then(json => {
    console.log(json);
    });
    }
    