from django.urls import path
from .views import *

urlpatterns = [
    path('orders/', OrderCreate.as_view()),
    path('orders/my/', MyOrderList.as_view()),
]