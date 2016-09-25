FROM    ubuntu:14.04

ENV     DEBIAN_FRONTEND noninteractive

RUN     apt-get update && apt-get install -y \
            python2.7-dev \
            python-pkg-resources \
            python-setuptools \
            python-virtualenv \
            python-pip \
            libcurl3 \
            build-essential \
            libxml2-dev \
            libxslt1-dev \
            zlib1g-dev

ENV     PROJECT_HOME=/work
ADD     . $PROJECT_HOME
WORKDIR $PROJECT_HOME

RUN     virtualenv -p $(which python2.7) $PROJECT_HOME/env
RUN     $PROJECT_HOME/env/bin/pip install -r $PROJECT_HOME/requirements.txt

CMD     $PROJECT_HOME/run.sh
EXPOSE  8888
