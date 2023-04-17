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
    console.log("Producer for test is ready");
    countryProducerReady = true;
});
  
producer.on('error', function (err) {
  console.error("Problem with producing Kafka message "+err);
})
 
 
var inputFile='tweet.csv';
var averageDelay = 3000;  
var spreadInDelay = 2000;
 
var countriesArray ;
 
var parser = parse({delimiter: ','}, function (err, data) {
    countriesArray = data;
    handleCountry(1);
});
 
fs.createReadStream(inputFile).pipe(parser);
 
function handleCountry( currentCountry) {   
    var line = countriesArray[currentCountry];
    var country = { "Number" : line[0]
                  , "Date" : line[1]
                  , "User" : line[2]
                  , "Tweet" : line[4]
                  , "Location" : line[5]
                  };
     console.log(JSON.stringify(country));
     produceTestMessage(country)
     var delay = averageDelay + (Math.random() -0.5) * spreadInDelay;
     setTimeout(handleCountry.bind(null, currentCountry+1), delay);             
}
 
function produceTestMessage(country) {
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
        console.error("Test producer is not ready yet, failed to produce message to Kafka.");
    }
 
}