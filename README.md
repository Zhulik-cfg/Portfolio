# KUZENKY STO Website

This is the full website project for **KUZENKY STO**, including a functional backend for handling contact forms.

## 🚀 How to Run Locally

You don't need a domain to run this on your laptop. Just follow these steps:

### 1. Install Node.js
If you haven't already, download and install [Node.js](https://nodejs.org/) (LTS version recommended).

### 2. Open Project Folder
Open your terminal (Command Prompt or PowerShell) and navigate to this project folder:
```bash
cd "d:\WebDev\Angtigravity Sandbox"
```

### 3. Install Dependencies
Run this command once to install the necessary tools:
```bash
npm install
```

### 4. Start the Server
Run this command to start the website:
```bash
node server.js
```

### 5. Access the Website
Open your browser and go to:
**[http://localhost:3000](http://localhost:3000)**

---

## 📂 Project Structure

- **`server.js`**: The brains of the operation. Runs the server and handles form data.
- **`public/`**: Contains all your website files (`index.html`, `style.css`, images).
- **`package.json`**: List of project dependencies.
- **`contact_requests.log`**: A file where submitted contact forms are saved locally.

## 📝 Checking Form Submissions
When someone submits the "Contact Us" form, the data is:
1. Printed in your terminal window.
2. Saved to `contact_requests.log` file in this folder.
