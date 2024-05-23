from django.shortcuts import render, redirect
from .models import *
import os
from django.conf import settings
from django.contrib import messages
from django.http import HttpResponse
from django.core.exceptions import ObjectDoesNotExist
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.core import serializers
from collections import Counter
from collections import defaultdict
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
import json
# Create your views here.

def  cargarInicio(request):
    return render(request,'inicio.html')

def  cargarmaterial(request):
    return render(request,'material.html')

def cargarLogin(request):
    return render(request,'login.html')

def cargarSignup(request):
    return render(request,'signup.html')

def cargarproblemas(request):
    return render(request,'problemas.html')

def cargarDonacion(request):
    return render(request,'donacion.html')
    

def loguearse(request):
    if request.method == 'GET':
        return render(request, 'login.html',{
        'form': AuthenticationForm
        })
    else:
        user = authenticate(
            request, username=request.POST['username'], password=request.POST
            ['password'])
        if user is None:
            return render(request, 'login.html',{
                'form': AuthenticationForm,
                'error': 'Usario o contrasenia incorrectos'
            })
        else:
            login(request, user)
            return redirect('/inicio')

def registrarse(request):

    if request.method == 'GET':
        return render(request,"signup.html",{
        'form': UserCreationForm
        })
    else:
        if request.POST['contrasenia_i'] == request.POST['contrasenia_f']:
            
            try:
                user = User.objects.create_user(username=request.POST['username'], password=request.POST['contrasenia_i'])
                print(user)
                user.save()
                login(request, user) 
                return redirect('/inicio')
            except:
                return render(request,"signup.html",{
                    'form': UserCreationForm,
                    "error": 'Este usuario ya existe'
                })   
        return render(request,"signup.html",{
            'form': UserCreationForm,
            "error": 'Las contrasenias ingresadas deben ser iguales'
        })  


def log_out(request):
    logout(request)
    return redirect('/inicio')
