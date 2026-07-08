from django.db import models

class Service(models.Model):
    CATEGORY_CHOICES = [
        ('engine', 'Двигатель'),
        ('body', 'Кузов'),
        ('interior', 'Салон'),
        ('suspension', 'Подвеска'),
        ('exhaust', 'Выхлоп'),
        ('wheels', 'Диски и шины'),
    ]

    name = models.CharField(max_length=200)
    category = models.CharField(max_length=200, choices=CATEGORY_CHOICES)
    description = models.TextField()
    price = models.IntegerField()
    duration_days = models.IntegerField(help_text='Срок выполнения в днях')
    image = models.ImageField(upload_to='services/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
# Create your models here.
