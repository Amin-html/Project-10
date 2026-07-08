from django.urls import path
from .views import *

urlpatterns = [
    path('portfolio/', PortfolioList.as_view()),
    path('portfolio/<int:pk>/', PortfolioDetail.as_view()),
]