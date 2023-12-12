# Django + ReactJS Template

A template for quickly setting up projects with the following items:
- Django backend
- ReactJS (Vite) frontend
- TailwindCSS


# Dependencies

To use this template, we require some preliminary setup, such as adding a `venv` and installing the `node` packages. Follow the below process to complete the setup. 

_Note: We assume you have the latest versions of `node` and `python` pre-installed._

## Backend Setup

1. Create a virtual environment in the `/backend` directory:
```shell
cd backend
python -m venv venv
```

2. Access the virtual environment:
- Windows users:
```shell
venv\Scripts\activate
```

- Mac/Linux:
```
source venv\Scripts\activate
```

3. Install the dependencies from the `requirements.txt` file:
```shell
pip install -r requirements.txt 
```

4. Create a new `.env` file in the root directory and add the following:
```shell
DJANGO_SECRET_KEY=[KEY_HERE]
DEBUG_MODE=True
```

5. Generate a new secret key for the project by accessing the Django shell:
```shell
django-admin shell

from django.core.management.utils import get_random_secret_key  
get_random_secret_key()
```

6. Copy the secret key into the `.env` file, replacing `[KEY_HERE]`.

7. Check everything works:
```shell
python manage.py runserver
```

## Frontend Setup

1. Install the node packages:
```shell
npm install
```

2. Check it works:
```shell
npm run dev
```
