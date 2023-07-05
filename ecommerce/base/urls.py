from django.urls import path
from . import views 
from .views import *

urlpatterns=[
###############################
####### User


    ######################
    ###### product
    path('all/' ,views.get_products),
    path("product/<str:pk>/" , views.get_Product),
    path("product/delete/<str:pk>/" , views.delete_Product),
    path("product/update/<str:pk>/" , views.update_Product),
    path("product/create/" , views.create_Product),
##################################
######order
    path("add/" , views.addOrserItems , name="orders-add"),
    path("myorder/", views.getMyOrders , name="order-my-orders") , 
    path("", views.getAllOrders , name="all-orders") , 
    path("<str:pk>/" , views.getOrderById , name="order-by-id") , 
    path("<str:pk>/pay/" , views.updateOrderToPaid , name="pay") ,
    path("<str:pk>/deliver/" , views.updateOrderToDelivered , name="deliver")


]