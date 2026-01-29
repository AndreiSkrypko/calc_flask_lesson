# Урок 1: Калькулятор на Flask — эталонный проект с комментариями
# Следуй шагам интерактивного руководства и сравни свой код с этим файлом!

from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
app.config['DEBUG'] = True


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/calculate', methods=['POST'])
def calculate():
    try:
        data = request.json
        num1 = float(data.get('num1', 0))
        num2 = float(data.get('num2', 0))
        operation = data.get('operation', '+')

        if operation == '+':
            result = num1 + num2
        elif operation == '-':
            result = num1 - num2
        elif operation == '*':
            result = num1 * num2
        elif operation == '/':
            if num2 == 0:
                return jsonify({
                    'success': False,
                    'error': 'Деление на ноль невозможно!'
                }), 400
            result = num1 / num2
        else:
            return jsonify({
                'success': False,
                'error': 'Неизвестная операция!'
            }), 400

        return jsonify({
            'success': True,
            'result': result
        })

    except ValueError:
        return jsonify({
            'success': False,
            'error': 'Пожалуйста, введите корректные числа!'
        }), 400
    except Exception as e:
        return jsonify({
            'success': False,
            'error': f'Произошла ошибка: {str(e)}'
        }), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
