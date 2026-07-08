from django.contrib import admin
from .models import Order

class OrderAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'service', 'status', 'total_price', 'created_at']
    list_filter = ['status']
admin.site.register(Order, OrderAdmin)
# Register your models here.
