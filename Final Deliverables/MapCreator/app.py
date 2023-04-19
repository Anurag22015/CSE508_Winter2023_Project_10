from flask import Flask, render_template, request
import signal
import json

from kafka import KafkaConsumer
from threading import Thread
from flask_socketio import SocketIO, emit
from map import createMap

app =   Flask(__name__)
app.config['SECRET_KEY'] = 'ir'
socketio = SocketIO(app, cors_allowed_origins='*')


@app.route('/')
def index():
    return 'Hello'

@socketio.on('connect')
def handle_connect():
    auth_header = request.headers.get('Authorization')
    print(auth_header)
    token = auth_header.split(' ')[1] if auth_header else None
    
    # Authenticate client using token
    if token != 'ir':
        return False
    emit('message', 'Hello client!')

# loc_arr=[]
def start_consumer():
    consumer = KafkaConsumer('locations', bootstrap_servers=['localhost:9092'])
    for msg in consumer:
        # loc_arr.extend(json.loads(msg.value.decode('utf-8')))
        # print(json.loads(msg.value.decode('utf-8')))
        # for i in json.loads(msg.value.decode('utf-8')):
        #     print(i)
        print(json.loads(msg.value.decode('utf-8')))
        try:
            html = createMap(json.loads(msg.value.decode('utf-8')))
            # html = createMap(loc_arr)
            print(html)
            # print(msg.value.decode('utf-8'))
            socketio.emit('locations',  html)
        except Exception as e:
            print(e)
            print("An exception occurred")
   


@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')

@socketio.on('error')
def test_disconnect():
    print('Client disconnected')

if __name__ =="__main__":
    socketio.start_background_task(start_consumer)
    socketio.run(app, port=8001)
    
