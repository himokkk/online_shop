from django.urls import path

from .views import (
    CategoryListView,
    LoginView,
    ProductCreateView,
    ProductListView,
    RegisterView,
    UserListView,
    admin_logout_view,
)

urlpatterns = [
    path("login/", LoginView.as_view()),
    path("logout/", admin_logout_view),
    path("register/", RegisterView.as_view()),
    path("user/", UserListView.as_view()),
    path("product/list/", ProductListView.as_view()),
    path("product/create/", ProductCreateView.as_view()),
    path("category/", CategoryListView.as_view()),
]
