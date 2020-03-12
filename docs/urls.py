from django.urls import include, path
from rest_framework import routers
from docs import views


router = routers.DefaultRouter()
router.register(r'get-html', views.FormHtmlViewSet, base_name='get_htm_form')
router.register(r'download', views.FormHtmlViewSet, base_name='download')
router.register(r'', views.TemplatesViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
]