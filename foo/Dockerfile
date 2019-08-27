FROM ubuntu:16.04

LABEL maintainer Late Lee(li@latelee.org)


RUN apt-get update || true && \
    apt-get install -y \
    wget && \
    rm -rf /var/lib/dpkg/info/* /var/lib/apt/lists/*

RUN echo "test for cicd" > foo.txt

CMD ["/bin/bash"]
