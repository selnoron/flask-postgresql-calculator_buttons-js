from flask import Flask, redirect, url_for, render_template, request, session
from models.DB import *

app = Flask(__name__)
app.secret_key = "8374tgrdsf8sdf973d4gf873gt36fgd7"


# ---------------------------------------------
# Главная страница
# ---------------------------------------------
@app.route("/", methods=["GET", "POST"])
def main_page():
    return render_template(
        
    )


if __name__ == "__main__":
    app.run(
        host='localhost',
        port=8000
    )