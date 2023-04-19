from django.contrib import admin
from django.urls import path
from PachisApp.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', inicio, name="Inicio"),
]