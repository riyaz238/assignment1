#!/bin/bash

DB_FIXTURE_PATH=`dirname "$BASH_SOURCE"`

docker run -p 5432:5432 \
  -e POSTGRES_PASSWORD=demopassword \
  -e POSTGRES_USER=demouser \
  -e POSTGRES_DB=demo \
  -v "$DB_FIXTURE_PATH/.docker/tickitdb":/data \
  library/postgres:9.6-alpine
