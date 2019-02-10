FROM mysql:8

RUN apt update && \
  apt install -y mdbtools 

ENV MYSQL_ROOT_PASSWORD=brain-heavenly-nail-seat
VOLUME [ "/var/lib/mysql" ]

COPY . .

ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 3306 33060
CMD ["mysqld"]