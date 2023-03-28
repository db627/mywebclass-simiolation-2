# Install Instructions for Developers
1. Clone the repository by going to the Code Button or using the command "git clone <repository url>"
2. Save the files to your computer locally
3. Install all dependincies by running the command "npm install"
4. Configure any necessary files such as the **dockerfile** and the **workflow** files with any credentials needed.
# Instructions for Deployment
1. Maake sure your code is up to date and properly tested. 
2. Setup your Secrets and Variables with your **DOCKER_USERNAME** and **DOCKER_PASSWORD**. Go to Settings -> Secrets and Variables -> Actions and click on New Repository Secret on the right
3. Push your code back to your GitHub and merge it with your Master Branch
4. Deploy to your choice of Hosting ex. GitHub pages (For more information on GitHub Pages: https://docs.github.com/en/pages/quickstart)
5. Once deployed, test your live website to make sure that everything works properly and resolve any issues
