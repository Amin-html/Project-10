from django.urls import path
from rest_framework_simplejwt.views import *
from .views import *

urlpatterns = [
    path('auth/login/', Register.as_view()),
    path('auth/register/', TokenObtainPairView.as_view()),
    path('auth/token/refresh/', TokenRefreshView.as_view()),
    path('profile/', Profile.as_view()),
]