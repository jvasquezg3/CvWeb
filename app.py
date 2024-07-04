from flask import Flask, render_template

def cv_app():
    app = Flask(__name__)

    @app.route('/')
    def index():
        return render_template('index.html')
    return app

if __name__ == '__main__':
    app=cv_app()
    app.run(debug=True)
