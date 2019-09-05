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

