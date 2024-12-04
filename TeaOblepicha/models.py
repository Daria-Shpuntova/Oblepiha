from django.db import models

class TeaRecipe(models.Model):
    slug = models.SlugField(unique=True)
    name = models.CharField(max_length=100)
    description = models.TextField()
    compound = models.TextField()
    img = models.TextField()

    def __str__(self):
        return self.name

class Svoystva(models.Model):
    name = models.CharField(max_length=200)
    text = models.TextField()

    def __str__(self):
        return self.name