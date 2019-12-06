from personal.models import User, position
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = 'Closes the specified poll for voting'

    def add_arguments(self, parser):
       pass

    def handle(self, *args, **options):
        User.objects.all().delete()
        self.stdout.write(self.style.SUCCESS('{0}'.format("Успешно удаленно все")))