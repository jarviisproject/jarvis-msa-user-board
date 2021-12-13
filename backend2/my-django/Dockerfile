FROM python:3.8

RUN pip install -r requirements.txt

WORKDIR /Users/bitcamp/___/djangnlp/backend2

COPY . .

WORKDIR ./my-django

CMD ["python3", "manage.py", "runserver", "0:8000"]

EXPOSE 8000