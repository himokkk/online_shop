from rest_framework import serializers

from ..models import Product


class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ["name", "price", "category", "category_name"]

    def get_category_name(self, obj):
        if obj.category:
            return obj.category.name
