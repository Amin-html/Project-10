from rest_framework import generics, permissions
from django_filters.rest_framework import DjangoFilterBackend  # Добавили импорт бэкенда
from .models import *
from .serializers import *
from .filters import *


class ServiceList(generics.ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

    # Исправлено: указываем бэкенд фильтрации и правильный атрибут для класса фильтра
    filter_backends = [DjangoFilterBackend]
    filterset_class = ServiceFilter

    permission_classes = [permissions.AllowAny]
    authentication_classes = []  # публичный эндпоинт, JWT не нужен


class ServiceDetail(generics.RetrieveAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    permission_classes = [permissions.AllowAny]
    authentication_classes = []
