from rest_framework import serializers

from ..models import UserProfile


class UserSerializer(serializers.Serializer):
    class Meta:
        model = UserProfile
        fields = "__all__"
