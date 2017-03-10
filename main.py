from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/app/<appname>",methods=["GET"])
def test(appname):
    return render_template('sen.html',app=appname)

if __name__ == "__main__":
    app.run()
