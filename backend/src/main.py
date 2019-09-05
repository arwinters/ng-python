from flask import Flask, jsonify, request
from .entities.entity import Session, engine, Base
from .entities.playbook import Playbook

app = Flask(__name__)

# generate database schema
Base.metadata.create_all(engine)

# start session
session = Session()

# check for existing data
playbooks = session.query(Playbook).all()

if len(playbooks) == 1:
  # create and persist dummy exam
  python_playbook = Playbook("NForce-IT", "Runbook Output", "script")
  session.add(python_playbook)
  session.commit()
  session.close()

  # reload exams
  playbook = session.query(Playbook).all()

# show existing exams
print('### Playbooks:')
for playbook in playbooks:
  print(f'({playbook.id}) {playbook.title} - {playbook.description}')
