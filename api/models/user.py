from django.conf import settings
from django.contrib import admin
from django.db import models


class UserProfile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="user"
    )
    image = models.ImageField(blank=True, null=True, upload_to="profile")
    description = models.TextField(blank=True, null=True)
    birth = models.DateField()

    def __str__(self):
        return str(self.user)


admin.site.register(UserProfile)
