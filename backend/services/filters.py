import django_filters
from .models import *

class ServiceFilter(django_filters.FilterSet):
    q = django_filters.CharFilter(field_name='name', lookup_expr='icontains')

    class Meta:
        model = Service
        fields = ['category']