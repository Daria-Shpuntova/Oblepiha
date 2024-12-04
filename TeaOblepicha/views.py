from rest_framework import generics
from .models import TeaRecipe, Svoystva
from .serializers import TeaRecipeSerializer, SvoystvaSerializer
from django.views.generic import TemplateView

class HomePageView(TemplateView):
    template_name = 'index.html'

class TeaRecipeList(generics.ListCreateAPIView):
    queryset = TeaRecipe.objects.all()
    print(queryset, 'queryset')
    serializer_class = TeaRecipeSerializer


class SvoystvaList(generics.ListCreateAPIView):
    queryset = Svoystva.objects.all()
    print(queryset, 'queryset Svoystva')
    serializer_class = SvoystvaSerializer


class TeaRecipeDetailView(generics.RetrieveAPIView):
    queryset = TeaRecipe.objects.all()
    serializer_class = TeaRecipeSerializer
    lookup_field = 'slug'