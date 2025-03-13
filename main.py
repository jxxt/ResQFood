from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import secrets
import smtplib
from email.mime.text import MIMEText

app = FastAPI()

# Add CORS middleware to allow requests from your frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Store magic links temporarily (you can replace this with a database)
magic_links = {}

class EmailRequest(BaseModel):
    email: EmailStr  # Using EmailStr for validation

class TokenRequest(BaseModel):
    token: str

@app.post("/send-magic-link")
def send_magic_link(request: EmailRequest):
    email = request.email
    token = secrets.token_urlsafe(32)  # Generate a secure token
    magic_links[token] = email  # Store token with the associated email

    # Hardcoded email credentials
    sender_email = "jeet.debnath2004@gmail.com"
    password = "uhuh jruu nust oyoo"  # Your Gmail app password
    
    # Frontend URL where your HTML is served
    frontend_url = "http://localhost:5173"
    
    # Send email
    receiver_email = email
    subject = "Your Magic Login Link"
    magic_link = f"{frontend_url}/login?token={token}"
    body = f"""
    <html>
    <body>
        <h2>Your Magic Login Link</h2>
        <p>Click the button below to log in:</p>
        <a href="{magic_link}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Log In</a>
        <p>If the button doesn't work, copy and paste this link into your browser:</p>
        <p>{magic_link}</p>
    </body>
    </html>
    """

    msg = MIMEText(body, "html")
    msg["Subject"] = subject
    msg["From"] = sender_email
    msg["To"] = receiver_email

    try:
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, msg.as_string())
    except Exception as e:
        print(f"Email sending failed: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Email sending failed: {str(e)}")

    return {"message": "Magic link sent"}

@app.post("/verify-magic-link")
def verify_magic_link(request: TokenRequest):
    token = request.token
    if token in magic_links:
        email = magic_links.pop(token)  # Remove token after verification
        return {"message": "Verified", "email": email}
    else:
        raise HTTPException(status_code=400, detail="Invalid or expired token")

# Add a test endpoint to verify the API is working
@app.get("/")
def read_root():
    return {"message": "Magic Link API is running"}