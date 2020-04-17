FROM ubuntu

MAINTAINER Aman Kumar <amankumar0511@gmail.com>

# Prevent dkpg error

ENV TERM=xterm-256color

# sed command is used for find and replace
RUN sed -i "s/http:\/\/archive./http:\/\/nz.archive./g" /etc/apt/sources.list


# Install python runtime

RUN apt-get update && \
	apt-get install -y \
	-o APT::Get::Install-Recommends="0" -o APT::Get::Install-Suggests="0"\
	python python3-venv

# Create virtual environment
# Upgrade PIP in virtual enviornment

RUN python3 -m venv /appenv && \
	. /appenv/bin/activate && \
	pip install pip --upgrade


# Add entrypoint script

ADD scripts/entrypoint.sh /usr/local/bin/entrypoint.sh

RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]