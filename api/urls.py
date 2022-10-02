from django.urls import path

from .views import CategoryView, ProductView, UserView

urlpatterns = [
    path("product/", ProductView.as_view()),
    path("category/", CategoryView.as_view()),
    path("user/", UserView.as_view()),
]
