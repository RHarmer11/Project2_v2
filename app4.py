import os
import pandas as pd
import numpy as np
import datetime as dt
import matplotlib
# import dash
# import plotly
import json
# plotly.tools.set_credentials_file(username='Brybtb', api_key='50jVIE7Kj5EttwIAtSyJ')
from plotly.offline import init_notebook_mode, iplot, plot
from IPython.display import display, HTML
from flask import Flask, render_template, url_for, jsonify


app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/stock")
def stock():

    df = pd.read_csv("result.csv")
    df = df.dropna()

    # print(df.head())

    dfdict = df.to_dict(orient="record")


    return jsonify(dfdict)

if __name__ == "__main__":
    app.run(debug=True, port=5002)