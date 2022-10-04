from .category import CategoryListView, CategoryCreateView
from .product import ProductListView, ProductCreateView
from .user import UserListView, UserCreateView
from .login import LoginView, RegisterView

__all__ = [
    "LoginView",
    "RegisterView",
    "CategoryListView",
    "CategoryCreateView",
    "ProductCreateView",
    "ProductListView",
    "UserListView",
    "UserCreateView"
]