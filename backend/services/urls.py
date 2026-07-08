from django.urls import path
from .views import *

urlpatterns = [
    path('services/', ServiceList.as_view()),
    path('services/<int:pk>/', ServiceDetail.as_view()),
]