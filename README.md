# cicdassignment

My Journey of CI/CD Assignment

Docker 
docker build . -t cicdassignment:v1
docker run -d -p 3005:80 cicdassignment:v1

Steps:
1. Go over to Docker Desktop kill all Containers/Images-Local

2. Modify script.js (or any other files) and save the changes

3. Git Pull/Push
- git add . 
- git commit -m "update" 
- git push origin  main 
  
