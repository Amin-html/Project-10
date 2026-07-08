from rest_framework import serializers
from .models import *

class OrderSerializer(serializers.ModelSerializer):
    service_name = serializers.CharField(source='service.name', read_only=True)
    status_display = serializers.CharField(source='get_status_display', read_only=True)

    class Meta:
        model = Order
        fields = [
            'id', 'service', 'service_name', 'status', 'status_display',
            'car_model', 'comment', 'total_price', 'created_at'
        ]
        read_only_fields = ['status', 'total_price', 'user']