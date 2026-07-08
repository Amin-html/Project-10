from django.contrib import admin
from .models import *

class PortfolioAdmin(admin.ModelAdmin):
    list_display = ['id', 'services', 'created_at']
admin.site.register(Portfolio, PortfolioAdmin)
# Register your models here.
