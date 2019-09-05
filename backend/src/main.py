from flask import Flask, jsonify, request
from .entities.entity import Session, engine, Base
from .entities.playbook import Playbook, PlaybookSchema

app = Flask(__name__)

# generate database schema
Base.metadata.create_all(engine)


@app.route('/playbooks')
def get_playbooks():
  # fetching from the database
  session = Session()
  playbook_objects = session.query(Playbook).all()

  # transforming into JSON-serializable objects
  schema = PlaybookSchema(many=True)
  playbooks = schema.dump(playbook_objects)

  # serializing as JSON
  session.close()
  return jsonify(playbooks)


@app.route('/playbooks', methods=['POST'])
def add_playbook():
  # mount exam object
  posted_playbook = PlaybookSchema(only=('title', 'description')) \
    .load(request.get_json())

  playbook = Playbook(**posted_playbook, created_by="HTTP post request")

  # persist exam
  session = Session()
  session.add(playbook)
  session.commit()

  # return created exam
  new_playbook = PlaybookSchema().dump(playbook)
  session.close()
  return jsonify(new_playbook), 201
