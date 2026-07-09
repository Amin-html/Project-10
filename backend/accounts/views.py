from rest_framework import generics, permissions
from django.contrib.auth.models import User
from .serializers import *

class Register(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]
    authentication_classes = []   # публичный эндпоинт — тут отключение уместно

class Profile(generics.RetrieveUpdateAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]
    # НЕ отключаем authentication_classes — профилю нужно знать, кто юзер

    def get_object(self):
        return self.request.user.profile
# Create your views here.
