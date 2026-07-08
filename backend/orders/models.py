from django.db import models
from django.contrib.auth.models import User
from services.models import Service

class Order(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Ожидает'),
        ('confirmed', 'Подтверждён'),
        ('in_processing', 'В работе'),
        ('completed', 'Готово'),
        ('cancelled', 'Отменён')
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    status = models.CharField(max_length=25, choices=STATUS_CHOICES, default='pending')
    car_model = models.CharField(max_length=100, help_text='Марка и модель машины клиента')
    comment = models.TextField(blank=True)
    total_price = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']  # свежие заказы сверху

    def __str__(self):
        return f'Заказ #{self.id} - {self.user.username} - {self.service.name}'

    def save(self, *args, **kwargs):
        # если цена не указана явно — берём её из услуги на момент создания заказа
        if not self.total_price:
            self.total_price = self.service.price
        super().save(*args, **kwargs)
# Create your models here.
