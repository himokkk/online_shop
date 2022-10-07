from rest_framework.generics import CreateAPIView, ListAPIView

from ..models import UserProfile
from ..serializers import UserProfileSerializer


class UserListView(ListAPIView):
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.all()


class UserCreateView(CreateAPIView):
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.all()
