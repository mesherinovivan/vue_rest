from django.contrib import admin
from personal.models import User, position

class UserAdmin(admin.ModelAdmin):

    search_fields = ('username', 'first_name', 'last_name',)
# Register your models here.
admin.site.register(User,UserAdmin)
admin.site.register(position)