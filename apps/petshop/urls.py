from django.urls import path, include
from . import views
urlpatterns = [
    path('',views.cargarInicio),
    path('inicio',views.cargarInicio,name="cargarinicio"),
    path('material',views.cargarmaterial),
    path('problemas',views.cargarproblemas),
    path('signup/', views.registrarse, name='signup'),
    path('logout/', views.log_out, name='logout'),
    path('signin/', views.loguearse, name='signin'),
    path('apoyo-pylearning/', views.cargarDonacion, name='donacion'),
  
    
]