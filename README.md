Slack Challenge
===============
This is web app which fetches the HTML of the page and displays the source to the user.
It's currently hosted on an AWS EC2 box: http://ec2-54-70-70-30.us-west-2.compute.amazonaws.com/

How do I run this app locally ?
1. run `make start` on your host
2. visit http://yourhostname

How does this app work ?
This web app creats two docker containers, one for web app, the other for
python backend. Web app listens on port 80, while python backend listens on
port 8081. You can verify that by running `docker ps`
