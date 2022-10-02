from rest_framework.generics import ListAPIView

from .models import Category, Product, UserProfile
from .serializers import CategorySerializer, ProductSerializer, UserSerializer


class ProductView(ListAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


class CategoryView(ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class UserView(ListAPIView):
    serializer_class = UserSerializer
    queryset = UserProfile.objects.all()
