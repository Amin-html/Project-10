from rest_framework import generics, permissions
from .models import *
from .serializers import *

class OrderCreate(generics.CreateAPIView):
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        # привязываем заказ к текущему юзеру автоматически
        serializer.save(user=self.request.user)

class MyOrderList(generics.ListAPIView):
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # каждый видит только свои заказы
        return Order.objects.filter(user=self.request.user)
# Create your views here.
