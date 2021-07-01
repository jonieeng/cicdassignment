FROM alpine
LABEL maintainer = "jonie.eng@gmail.com"
EXPOSE 8080
RUN apk update
RUN apk add python2
COPY app/index.html /tmp/index.html
COPY app/start.sh /tmp/start.sh
USER 1000
CMD ["node"]
