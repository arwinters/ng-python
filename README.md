# ng-python
Angular and Python Happy Together


## SQL

```text
docker run --name ng-python \
    -p 5432:5432 \
    -e POSTGRES_DB=ng-python \
    -e POSTGRES_PASSWORD=ngPython \
    -d postgres
```

## Bootstrap Python
```bash
mkdir backend
cd backend
pipenv --three
pipenv install sqlalchemy psycopg2-binary

mkdir -p src/entities
touch src/__init__.py
touch src/entities/__init__.py
touch src/entities/entity.py
touch src/entities/playbook.py
touch src/main.py
touch bootstrap.sh
```

## Activate Python venv
```bash

# Activate pipenv
pipenv shell

# Run the main module
python -m src.main
```

## Flask

```bash
pipenv install flask marshmallow
```

```bash
# make script executable
chmod u+x bootstrap.sh

# execute script in the background
./bootstrap.sh &

# retrieve playbooks
curl http://0.0.0.0:5000/playbooks

# create a new playbook
curl -X POST -H 'Content-Type: application/json' -d '{
  "title": "Awesome Playbook",
  "description": "Just say hello with Ansible"
}' http://0.0.0.0:5000/playbooks

```

## Angular
```bash
cd ..
ng new frontend
cd frontend
touch src/app/env.ts
mkdir src/app/playbooks
```
