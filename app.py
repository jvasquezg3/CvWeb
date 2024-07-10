#from flask import Flask, render_template
from flask import Flask, render_template, send_file
import os  # Importar el módulo os para manejo de rutas y archivos


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/download_cv')
def download_cv():
    filename = 'JvasquezCV.pdf'
    directory = 'static/documents'
    filepath = os.path.join(directory, filename)
    if os.path.isfile(filepath):
        return send_file(filepath, as_attachment=True)
    else:
        return "Archivo no encontrado", 404
    

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
