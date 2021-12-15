FROM python:3.8

WORKDIR /my-django

COPY . .
COPY requirements.txt requirements.txt

CMD ["python", "manage.py", "runserver"]

RUN python -m pip install --upgrade pip
RUN pip install -r requirements.txt

EXPOSE 8000