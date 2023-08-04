from django.urls import path
from .views import *


urlspatterns = [
    path('addTask', addTask),
]