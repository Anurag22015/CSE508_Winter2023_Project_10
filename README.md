# CSE508_Winter2023_Project_10
# Projection Name- Earthquake Detection using twitter tweets.

### Description- This project intends to create a real-time earthquake detection and notification system that can detect seismic events quickly and correctly and warn NGOs and other monitoring committees utilizing Twitter data analysis techniques and machine learning algorithms. The goal is to provide a cost-effective and timely solution that can help save lives and mitigate the impact of earthquakes

## Installation Required:
#### First run classification model present in final deliverable folder.For that load training dataset in google colab and also your test dataset and then run the ir_bert_model.py file on that.
#### After that,
#### Install Docker and Docker compose
### For copying and saving our model
#### mkdir CSE508_Winter2023_Project_10/Final\ Deliverables/IR_Project_BE/model/
#### copy saved model in CSE508_Winter2023_Project_10/Final\ Deliverables/IR_Project_BE/model/

### For Setting up Kafka and Zookeeper
#### cd CSE508_Winter2023_Project_10/Final\ Deliverables/kafka-docker/
#### docker compose up -d 

### For running Kafka Producer  nodejs service for real time tweets streaming
#### cd CSE508_Winter2023_Project_10/Final\ Deliverables/kafka-producer/
#### docker build . --no-cache -t producer-api
#### docker run -it --init --net="host" -d --name producer-api-ins producer-api

### For running prediction flask webserver 
#### cd CSE508_Winter2023_Project_10/Final\ Deliverables/IR_Project_BE/
#### docker build . --no-cache -t predict-api
#### docker run -it --init --net="host" -d --name predict-api-ins predict-api

### For running map creator flask webserver
#### cd CSE508_Winter2023_Project_10/Final\ Deliverables/MapCreator/
#### docker build . --no-cache -t map-api
#### docker run -it --init --net="host" -d --name map-api-ins map-api

### For running UI of the application
#### cd CSE508_Winter2023_Project_10/Final\ Deliverables/FrontEndWithFireBase/
#### docker build . --no-cache -t frontend
#### docker run -it --init --net="host" -d --name frontend-ins frontend

