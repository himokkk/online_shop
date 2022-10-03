from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.response import Response
from .models import Category, Product, UserProfile
from .serializers import CategorySerializer, ProductSerializer, UserProfileSerializer, UserSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework.settings import api_settings
from django.contrib.auth import login
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
class ProductView(ListAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


class CategoryView(ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class UserView(ListAPIView):
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.all()


class LoginView(ObtainAuthToken):
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
        })


class RegisterView(CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
