from django.db import models
from services.models import Service

class Portfolio(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    before_image = models.ImageField(upload_to='portfolio/before')
    after_image = models.ImageField(upload_to='portfolio/after')
    services = models.ForeignKey(Service, on_delete=models.SET_NULL, null=True, blank=True, related_name='portfolio_items')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
# Create your models here.
