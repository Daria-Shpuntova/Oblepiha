from django.urls import path
from .views import TeaRecipeList, HomePageView, TeaRecipeDetailView, SvoystvaList

urlpatterns = [
    path('api/tea_recipes/', TeaRecipeList.as_view(), name='tea-recipe-list'),
    path('api/svoystva/', SvoystvaList.as_view(), name='svoystva-list'),
    path('api/tea_recipes/<slug:slug>/', TeaRecipeDetailView.as_view(), name='tea-recipe-detail'),
    path('', HomePageView.as_view(), name='home'),
]