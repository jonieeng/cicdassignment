# cicdassignment

## Steps:
1. Go over to Docker Desktop kill all Containers/Images-Local

2. Modify script.js (or any other files) and save the changes

3. Git Pull/Push
  - `git add .` 
  - `git commit -m "update"` 
  - `git push origin main`

4. Go over docker desktop Images - Remote Respositiories -> PULL (2 times)

5. Appear on Images - Local -> RUN Local Host: 30xx (Change the behind number) and Run

6. Go to browser `http://localhost:30xx` and enter

7. Key in **Customer Name/Username/Password** to see the update!
  
# My Journey of CI/CD Assignment

[Setting Up Docker Project] (https://docs.docker.com/ci-cd/github-actions/)

![alt text] (https://i.stack.imgur.com/0DJ00.png/200/200)

[Remove Docker Desktop] (https://github.com/docker/toolbox/blob/master/osx/uninstall.sh)



> blockquote

## Docker 
`docker build . -t cicdassignment:v1`
`docker run -d -p 3005:80 cicdassignment:v1`


