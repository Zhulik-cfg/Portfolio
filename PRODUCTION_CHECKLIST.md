# Production Checklist

To verify your website is ready for the real world (public internet access), complete this checklist:

## 1. Domain & Hosting
- [ ] **Buy a Domain**: Purchase `kuzenky-sto.com` (or similar) from a registrar (GoDaddy, Namecheap, etc.).
- [ ] **Choose Hosting**:
    - **Vercel / Netlify**: Best for the frontend (static files), but won't run this `server.js` backend easily without configuration.
    - **Heroku / Render / DigitalOcean**: Good for running this Node.js backend full-time.
    - **VPS (Ubuntu Server)**: Full control, requires manual setup (Nginx, PM2).

## 2. Security (SSL)
- [ ] **HTTPS**: Ensure your hosting provider offers a free SSL certificate (the "lock" icon in the browser). Most modern hosts (Render, Heroku, Vercel) do this automatically.

## 3. Database (Optional but Recommended)
- [ ] **Switch from File Logging**: Currently, `contact_requests.log` saves data to a file. On cloud hosting, these files can disappear when the server restarts.
- [ ] **Solution**: Connect a database like **MongoDB Atlas** (free tier available) or **PostgreSQL** to save customer leads permanently.

## 4. Email Notifications
- [ ] **Get Notified**: Instead of just logging requests, use a service like **Nodemailer** + **Gmail** (or SendGrid) to send an email to *you* whenever a client signs up.

## 5. Analytics
- [ ] **Google Analytics**: Add a tracking ID to `index.html` to see how many visitors you get.

## 6. Favicon
- [ ] **Browser Tab Icon**: Create a small 16x16 or 32x32 version of your logo and save it as `favicon.ico` in the `public/` folder. Add `<link rel="icon" href="favicon.ico">` to your HTML `<head>`.
