from rest_framework import serializers
from .models import *

class PortfolioSerializer(serializers.ModelSerializer):
    service_name = serializers.CharField(source='service.name', read_only=True)

    class Meta:
        model = Portfolio
        fields = ['id', 'title', 'description', 'before_image', 'after_image', 'services', 'service_name', 'created_at']