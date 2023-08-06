# ToDoList
ToDoList is a web application utilising the Django and React framework. It is a beginner application, that makes use of REST APIs and front-end development.

## Installation
Use the Python package manager [pip](https://pip.pypa.io/en/stable/) to install all required libraries for backend development.

```bash
pip install -r requirements.txt
```

Install front-end frameworks using node package manager [npm](https://www.npmjs.com/) by navigating to the frontend directory.

```bash
cd frontend
npm install
```

Run Django migrations for the models.
```bash
cd ../
python manage.py makemigrations
python manage.py migrate
```

## Usage
Start the Django Development Server.
```bash
python manage.py runserver
```

Start the React Development Server.
```bash
cd frontend
npm start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Licence
[MIT](https://choosealicense.com/licenses/mit/)