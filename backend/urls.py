from django.urls import path
from . import views


urlpatterns = [
    path('addTask/', views.addTask),
    path('getAllTasks/', views.getAllTasks),
    path('deleteTask/<int:id>/', views.deleteTask),
    path('editTask/<int:id>/', views.updateTask)
]