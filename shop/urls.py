from django.contrib import admin
from django.shortcuts import redirect
from django.urls import include, path

urlpatterns = [
    path("admin/logout/", lambda request: redirect("/api/logout/", permanent=False)),
    path("admin/", admin.site.urls),
    path("api/", include("api.urls")),
]
