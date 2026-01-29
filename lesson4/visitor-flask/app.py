# Урок 4: Сайт-визитка
# Несколько страниц, наследование шаблонов, навигация

from flask import Flask, render_template

app = Flask(__name__)
app.config['DEBUG'] = True


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/contact')
def contact():
    return render_template('contact.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5003, debug=True)
