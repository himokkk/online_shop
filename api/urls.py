from django.urls import path

from .views import (CategoryListView, LoginView, ProductCreateView,
                    ProductListView, RegisterView, UserListView)

urlpatterns = [
    path("login/", LoginView.as_view()),
    path("register/", RegisterView.as_view()),
    path("user/", UserListView.as_view()),
    path("product/list/", ProductListView.as_view()),
    path("product/create/", ProductCreateView.as_view()),
    path("category/", CategoryListView.as_view()),
]
