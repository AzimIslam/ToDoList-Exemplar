from django.contrib import admin
from .models import ListEntry

# Register your models here.
@admin.register(ListEntry)
class ListEntryAdmin(admin.ModelAdmin):
    pass
