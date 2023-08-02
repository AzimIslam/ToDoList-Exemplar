from django.db import models

# Create your models here.
class ListEntry(models.Model):
    description = models.CharField(max_length=100)
    finished = models.BooleanField(default=False)
    due = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.description

    def to_dict(self):
        return {
            'id': self.id,
            'description': self.description,
            'finished': self.finished,
            'due': self.due
        }
