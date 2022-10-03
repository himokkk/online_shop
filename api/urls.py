from django.urls import path

from .views import CategoryView, ProductView, UserView, LoginView, RegisterView

urlpatterns = [
    path("product/", ProductView.as_view()),
    path("category/", CategoryView.as_view()),
    path("user/", UserView.as_view()),
    path("login/", LoginView.as_view()),
    path("register/", RegisterView.as_view()),
]
