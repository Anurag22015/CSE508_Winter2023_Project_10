from flask import Flask
from readcsv import readcsv
from readData import generateData

app =   Flask(__name__)


@app.route('/')
def index():
    return generateData()


if __name__ =="__main__":
    app.run(host='127.0.0.1',port=8000, debug=True)