FROM ubuntu

MAINTAINER Aman Kumar<amankumar0511@gmail.com>

# Prevent dkpg error

ENV TERM=xterm-256color

# sed command is used for find and replace
RUN sed -i "s/http:\/\/archive./http:\/\/nz.archive./g" /etc/apt/sources.list


RUN apt update -qy && \
    apt install -qy software-properties-common && \
    apt-add-repository --yes --update ppa:ansible/ansible && \
    apt install -qy ansible

VOLUME /ansible
WORKDIR /ansible


ENTRYPOINT ["ansible-playbook"]

CMD ["site.yml"]
