from flask import Flask, redirect, url_for, render_template, request, session
from models.DB import *

app = Flask(__name__)
app.secret_key = "8374tgrdsf8sdf973d4gf873gt36fgd7"


# ---------------------------------------------
# Главная страница
# ---------------------------------------------
@app.route("/", methods=["GET", "POST"])
def main_page():
    if request.method == 'POST':
        data: str = request.form.getlist('data')
        DB.insert_hist(data[0])
    return render_template(
        'index.html',
        his=DB.get_hist(),
        le=len(DB.get_hist())
    )


if __name__ == "__main__":
    DB.create()
    app.run(
        host='localhost',
        port=8000
    )