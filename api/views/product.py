from rest_framework.generics import CreateAPIView, ListAPIView

from ..models import Product
from ..serializers import ProductSerializer


class ProductListView(ListAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


class ProductCreateView(CreateAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()