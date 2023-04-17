from kafka import KafkaConsumer
from app import socketio

def start_consumer():
    consumer = KafkaConsumer('locations', bootstrap_servers=['localhost:9092'])

    for msg in consumer:
        socketio.emit('message', {'data': msg.value.decode('utf-8')})