# Tuning Atelier 🔧

Full-stack платформа тюнинг-ателье с каталогом услуг, портфолио работ и системой заказов.

## Стек

**Бэкенд:** Django + Django REST Framework + JWT (SimpleJWT) + PostgreSQL + django-filter
**Фронтенд:** React (Vite) + React Router + Axios + CSS Modules
**Инфраструктура:** Docker Compose (db + backend + frontend)

## Функционал

- Каталог услуг с фильтрацией по категориям и поиском
- Портфолио работ с переключателем фото "До / После"
- Система заказов со статусами (Ожидает → Подтверждён → В работе → Готово / Отменён)
- Профиль пользователя с полной историей заказов
- JWT-аутентификация (регистрация, логин)

## Модели

Service → Order → OrderItem
Portfolio (работы ателье)
Review
UserProfile

## API эндпоинты

| Метод | Путь | Описание |
|---|---|---|
| GET | `/api/services/` | Список услуг (`?category=&q=`) |
| GET | `/api/services/<id>/` | Детали услуги |
| GET | `/api/portfolio/` | Портфолио работ |
| POST | `/api/orders/` | Создать заказ |
| GET | `/api/orders/my/` | Мои заказы |
| GET | `/api/profile/` | Профиль |
| POST | `/api/auth/register/` | Регистрация |
| POST | `/api/auth/login/` | Логин (JWT) |

## Запуск

```bash
docker-compose up --build
docker-compose exec backend python manage.py migrate
docker-compose exec backend python manage.py createsuperuser
```

- Фронтенд: http://localhost:3000
- Бэкенд API: http://localhost:8000/api
- Админка: http://localhost:8000/admin