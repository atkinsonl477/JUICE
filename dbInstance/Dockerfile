FROM postgres:16

EXPOSE 5432

ENV POSTGRES_DB=website_db
ENV POSTGRES_USER=user
ENV POSTGRES_PASSWORD=1234

COPY init.sql /docker-entrypoint-initdb.d/