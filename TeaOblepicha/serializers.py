from rest_framework import serializers
from .models import TeaRecipe, Svoystva

class TeaRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeaRecipe
        fields = '__all__'


class SvoystvaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Svoystva
        fields = '__all__'