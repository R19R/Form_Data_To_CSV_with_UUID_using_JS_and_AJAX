from flask import Flask, request, redirect, render_template, jsonify, make_response
import csv, json, logging
import pandas as pd
import uuid


app = Flask(__name__)


@app.route("/")
def home():
    uid = uuid.uuid4()
    return render_template("spa.html", uid=uid)


@app.route("/login", methods=['POST',"GET"])
def login():
    if request.method == "POST":
        name = request.get_json('uname')
        password = request.get_json('pword')
        filename = 'newfile.csv'
        # data = pandas.read_csv(filename)
        return "Logged IN"


@app.route("/inputs", methods=["POST", "GET"])
def input():
    if request.method == 'POST':
        params = request.get_json(force=True)
        name_r= params.get('name')
        comments_r = params.get('comment')
        uid = uuid.uuid4()
        fields = ["UID","name", "comments"]
        with open("newfile.csv", 'a') as file:
            writer = csv.DictWriter(file, fieldnames=fields)
            writer.writerow({"UID":uid, "name":name_r, "comments":comments_r})
        return jsonify({"UID":uid, "name":name_r, "comment":comments_r})
        # return name_r, comments_r






if __name__ == "__main__":
    app.run(debug=True)