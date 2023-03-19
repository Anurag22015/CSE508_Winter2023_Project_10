var fs = require('fs');
const { parse } = require('csv-parse');
 
// Kafka configuration
var kafka = require('kafka-node')
var Producer = kafka.Producer
// instantiate client with as connectstring host:port for  the ZooKeeper for the Kafka cluster
var client = new kafka.KafkaClient("ubuntu:2181/")
 
// name of the topic to produce to
var countriesTopic = "test";
 
    KeyedMessage = kafka.KeyedMessage,
    producer = new Producer(client),
    km = new KeyedMessage('key', 'message'),
    countryProducerReady = false ;
 
producer.on('ready', function () {
    console.log("Producer for countries is ready");
    countryProducerReady = true;
});
  
producer.on('error', function (err) {
  console.error("Problem with producing Kafka message "+err);
})
 
 
var inputFile='tweet.csv';
var averageDelay = 3000;  // in miliseconds
var spreadInDelay = 2000; // in miliseconds
 
var countriesArray ;
 
var parser = parse({delimiter: ','}, function (err, data) {
    countriesArray = data;
    // when all countries are available,then process the first one
    // note: array element at index 0 contains the row of headers that we should skip
    handleCountry(1);
});
 
// read the inputFile, feed the contents to the parser
fs.createReadStream(inputFile).pipe(parser);
 
// handle the current coountry record
function handleCountry( currentCountry) {   
    var line = countriesArray[currentCountry];
    var country = { "Number" : line[0]
                  , "Date" : line[1]
                  , "User" : line[2]
                  , "Tweet" : line[4]
                  , "Location" : line[5]
                  };
     console.log(JSON.stringify(country));
     // produce country message to Kafka
     produceCountryMessage(country)
     // schedule this function to process next country after a random delay of between averageDelay plus or minus spreadInDelay )
     var delay = averageDelay + (Math.random() -0.5) * spreadInDelay;
     //note: use bind to pass in the value for the input parameter currentCountry     
     setTimeout(handleCountry.bind(null, currentCountry+1), delay);             
}//handleCountry
 
function produceCountryMessage(country) {
    KeyedMessage = kafka.KeyedMessage,
    countryKM = new KeyedMessage(country.code, JSON.stringify(country)),
    payloads = [
        { topic: countriesTopic, messages: countryKM, partition: 0 },
    ];
    if (countryProducerReady) {
    producer.send(payloads, function (err, data) {
        console.log(data);
    });
    } else {
        // the exception handling can be improved, for example schedule this message to be tried again later on
        console.error("sorry, CountryProducer is not ready yet, failed to produce message to Kafka.");
    }
 
}//produceCountryMessage