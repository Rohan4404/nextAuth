Step 1: Clone the repository
Clone the repository to your local machine by downloading the zip file, or using the command:    " git clone  "https://github.com/Rohan4404/nextAuth.git"  "

Step 2: Install dependencies and run the project
Open the terminal in your project directory.
Run the following command to start the development server:    "npm run dev"


Step 3: Access the application
Once the server is running, open your browser and go to:    "http://localhost:3000/login"


Step 4: Sign in with Google
On the login page, you’ll see an option to sign in with Google. Simply click the Sign in with Google button, and you will be signed in with your Google account.

step 5: You will reach
on this url http://localhost:3000/dashboard


Step 6: Troubleshooting Google Login
If you are unable to sign in with Google, follow these steps to fix the issue:

Open the .env.local file in your project.
Update the following variables with your Google credentials:
GOOGLE_CLIENT_ID: Set this to your Google Client ID.
GOOGLE_CLIENT_SECRET: Update this value to match your Google Client Secret.
Note: The credentials are specific to my local setup, so they need to be updated with your own Google credentials for proper functionality.
