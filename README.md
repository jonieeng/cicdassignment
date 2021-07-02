# cicdassignment

## Steps:
1. Go over to Docker Desktop kill all Containers/Images-Local

2. Modify script.js (or any other files) and save the changes

3. Git Pull/Push
  - `git add .` 
  - `git commit -m "update"` 
  - `git push origin main`

4. Go over docker desktop Images - Remote Respositiories -> PULL (2 times - NO IDEA WHY NEED TO PULL 2 TIMES :raised_eyebrow: )

5. Appear on Images - Local -> RUN Local Host: 30xx (Change the behind number) and Run

6. Go to browser `http://localhost:30xx` and enter

7. Key in **Customer Name/Username/Password** to see the update!
  
# My Journey of CI/CD Assignment
It was a smooth process setting up of the Docket Project and GitHub Actions Workflow.
And I thought that it was easy to follow the below link.

[Setting Up Docker Project](https://docs.docker.com/ci-cd/github-actions/)

However, when I was trying to set up the docker build and docker run on my local via Docker Desktop, that's the beginning of my nightmare!

I googled, did multiple tries, but I kept having the same error below:-

> Unable to find image 'jonieeng/cicdassignment:latest' locally
docker: Error response from daemon: manifest for jonieeng/cicdassignment:latest not found: manifest unknown: manifest unknown.

:exploding_head:

And things got worst when my screen was showing fatal error :confounded:

![alt text](https://i.stack.imgur.com/0DJ00.png/200/200)

I was stuck for hours trying to delete/uninstall Docker Desktop, but I had the alert

> The item Docker can't move to bin because it's open yet. 

After many hours later :anger:, I chanced by [Remove Docker Desktop](https://github.com/docker/toolbox/blob/master/osx/uninstall.sh) and managed to remove Docker Desktop from my applications.

Spent more than 12 hours, I finally gave up on including Docker in my workflow. 

[Prof Edward](https://www.linkedin.com/in/edwardjoesoef/) came to the rescue! 

He got my problem solved!!! :innocent:

## Run Terminal
`docker build . -t cicdassignment:v1`

`docker run -d -p 3005:80 cicdassignment:v1`

## Update Dockerfile 
`FROM nginx:alpine`

`COPY . /usr/share/nginx/html`

## Update YML

```publish.yml

- name: Build and push
  id: docker_build
  uses: docker/build-push-action@v2
  with:
    context: ./
    file: ./Dockerfile
    push: true
    tags: ${{ secrets.DOCKER_HUB_USERNAME }}/cicdassignment:latest
```

 And yes, now I'm able to docker build and run, add as part of my workflow.   
