from flask import Flask

app = Flask(__name__)

app.secret_key = '46515d0b26a3f598a05f01a5b4108843'


@app.route('/', methods=['GET'])
def index():
    return app.send_static_file('index.html')


# Serve static files
@app.route('/<path:path>', methods=['GET'])
def assets(path):
    return app.send_static_file(path)
