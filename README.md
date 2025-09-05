# Ralph Client Survey 🎯

A beautifully designed client feedback survey with Ralph branding and Google Sheets integration.

## 🚀 Deployment Instructions

### Railway Deployment

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Add Ralph client survey"
   git push origin main
   ```

2. **Deploy to Railway**:
   - Connect your GitHub repo to Railway
   - Railway will automatically detect the Node.js app
   - The app will be available at your Railway-provided URL

### Google Sheets Setup

1. **Create a Google Sheet**:
   - Go to [Google Sheets](https://sheets.google.com)
   - Create a new blank spreadsheet
   - Name it "Ralph Client Survey Responses"

2. **Set up Apps Script**:
   - In your Google Sheet, go to `Extensions > Apps Script`
   - Delete the default code
   - Copy and paste the code from `google-apps-script.gs`
   - Save the script

3. **Deploy the Script**:
   - Click `Deploy > New deployment`
   - Choose "Web app" as the type
   - Set execute as "Me"
   - Set access to "Anyone"
   - Click "Deploy"
   - Copy the Web App URL

4. **Update Survey**:
   - In `index.html`, find line with `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE`
   - Replace it with your copied Web App URL

## 🎨 Features

- **Ralph Branding**: Full brand colors and logo integration
- **Responsive Design**: Works perfectly on mobile and desktop
- **Google Sheets Integration**: Automatic data collection
- **Professional UI**: Clean, modern interface with smooth animations
- **Form Validation**: Required fields and user-friendly feedback
- **Success Modal**: Elegant thank you message after submission

## 🛠️ Local Development

```bash
npm install
npm start
```

The survey will be available at `http://localhost:3000`

## 📊 Survey Questions

1. What's the best thing about Ralph?
2. What's the worst thing about Ralph?
3. Would you recommend Ralph to your colleagues?
4. Overall rating (1-10 scale)
5. What would you change about Ralph?
6. What new services would you like to see?
7. Upcoming collaboration projects
8. How to make Ralph your first choice

## 🎯 Brand Colors

- **Hero Pink**: #EB008B
- **Cyan**: #31BDBF  
- **Orange**: #F16524
- **Green**: #44B658
- **Yellow**: #FBC000

## 📁 File Structure

```
clientsurvey/
├── index.html              # Main survey page
├── surveylogo.png          # Ralph logo
├── server.js               # Express server for Railway
├── package.json            # Node.js dependencies
├── google-apps-script.gs   # Google Sheets integration
├── ralph-client-survey.tsx # Original React component
└── README.md               # This file
```

## 🔧 Customization

To customize the survey:

1. **Questions**: Edit the form fields in `index.html`
2. **Styling**: Modify the CSS variables in the `<style>` section
3. **Branding**: Replace `surveylogo.png` with your logo
4. **Colors**: Update the CSS custom properties for brand colors

## 🚨 Important Notes

- Make sure to replace the Google Apps Script URL before going live
- The form uses `mode: 'no-cors'` for Google Sheets compatibility
- All responses are timestamped automatically
- The survey works without JavaScript, but with limited functionality

## 🎉 Ready to Deploy!

Your survey is ready for GitHub and Railway deployment with full Google Sheets integration!