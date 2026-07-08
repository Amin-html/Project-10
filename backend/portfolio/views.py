from rest_framework import generics, permissions
from .models import *
from .serializers import *

class PortfolioList(generics.ListAPIView):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer
    permission_classes = [permissions.AllowAny]
    authentication_classes = []

class PortfolioDetail(generics.RetrieveAPIView):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer
    permission_classes = [permissions.AllowAny]
    authentication_classes = []
# Create your views here.
